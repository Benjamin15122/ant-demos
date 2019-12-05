import React from 'react';
import { connect } from 'dva';

const Page = ({ page,dispatch }) => <div>
        <p>{page.count}</p>
        <button onClick={()=>dispatch({type:'page3/add'})}>click me</button>
    </div>;

export default connect(({ page3 }) => ({
    page: page3
  }))(Page);