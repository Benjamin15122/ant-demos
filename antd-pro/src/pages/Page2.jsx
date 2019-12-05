import React from 'react';
import { connect } from 'dva';

const Page = ({ page,dispatch }) => <div>
        <p>{page.count}</p>
        <button onClick={()=>dispatch({type:'page2/add'})}>click me</button>
    </div>;

export default connect(({ page2 }) => ({
    page: page2
  }))(Page);