import React from 'react';
import { connect } from 'dva';

const Page = ({ page,dispatch }) => <div>
        <p>{page.count}</p>
        <button onClick={()=>dispatch({type:'page1/add'})}>click me</button>
    </div>;

export default connect(({ page1 }) => ({
    page: page1
  }))(Page);