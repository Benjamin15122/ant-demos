/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useEffect, Component } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import { Icon, Result, Button, Menu, Spin } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { isAntDesignPro, getAuthorityFromRouter } from '@/utils/utils';
import logo from '../assets/logo.svg';
var updateLocked = false
const { SubMenu } = Menu;
const recursiveMenuDecoder = menuList => menuList.map(item => {
  if (item === null) return null
  return item.children.length!==0 ? <SubMenu title={
    <span>
      {item.icon ? <Icon type={item.icon} /> : null}
      {item.name}
    </span>
  }>{recursiveMenuDecoder(item.children)}</SubMenu> :
    <Menu.Item key={item.locale}><Link to={item.path}>{item.name}</Link></Menu.Item>
})

class Tabs extends React.Component {
  state = {
    current: null,
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { list } = this.props
    const MenuGroup = recursiveMenuDecoder(list).filter(item=>item!==null)
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        {MenuGroup}
      </Menu>
    );
  }
}

const noMatch = (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);

/**
 * use Authorized check all menu item
 */
const recursiveMenuDataRender = rawMenuList => {
  const menuList = rawMenuList.map(item => {
    const localItem = { ...item, children: item.children ? recursiveMenuDataRender(item.children) : [] };
    return Authorized.check(item.authority, localItem, null);
  });
  return menuList
}

const menuDataRender = dispatch => rawMenuList => {
  const menuList = recursiveMenuDataRender(rawMenuList)
  if (!updateLocked) {
    dispatch({ type: 'menu/update', payload: menuList })
    updateLocked = true
  }
  return menuList
}

const defaultFooterDom = (
  <DefaultFooter
    copyright="2019 蚂蚁金服体验技术部出品"
    links={[
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <Icon type="github" />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);

const footerRender = () => {
  if (!isAntDesignPro()) {
    return defaultFooterDom;
  }

  return (
    <>
      {defaultFooterDom}
      <div
        style={{
          padding: '0px 24px 24px',
          textAlign: 'center',
        }}
      >
        <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            width="82px"
            alt="netlify logo"
          />
        </a>
      </div>
    </>
  );
};

class BasicLayout extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }

  handleMenuCollapse = payload => {
    const { dispatch } = this.props
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  render() {
    const {
      children,
      tabSelected,
      tabList,
      dispatch,
      settings,
      location = {
        pathname: '/',
      },
    } = this.props;

    const authorized = getAuthorityFromRouter(this.props.route.routes, location.pathname || '/') || {
      authority: undefined
    }
    return (
      <ProLayout
        logo={logo}
        menuHeaderRender={(logoDom, titleDom) => (
          <Link to="/">
            {logoDom}
            {titleDom}
          </Link>
        )}
        onCollapse={this.handleMenuCollapse}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: formatMessage({
              id: 'menu.home',
              defaultMessage: 'Home',
            }),
          },
          ...routers,
        ]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
              <span>{route.breadcrumbName}</span>
            );
        }}
        footerRender={footerRender}
        menuDataRender={menuDataRender(dispatch)}
        formatMessage={formatMessage}
        rightContentRender={rightProps => <RightContent {...rightProps} />}
        {...this.props}
        {...settings}
      >
        <Tabs list={tabList} selected={tabSelected} dispatch={dispatch} />
        <Authorized authority={authorized.authority} noMatch={noMatch}>
          {children}
        </Authorized>
      </ProLayout>
    );
  }

}

export default connect(({ global, settings, menu }) => ({
  collapsed: global.collapsed,
  settings,
  tabList: menu.menuList,
  tabSelected: menu.selected,
}))(BasicLayout);
