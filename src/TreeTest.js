import React, { Component } from 'react';
import { Tree } from 'antd';

export default class TreeTest extends Component {
      mockData = (nums) =>{
        const data = [];
        for(let i=0; i<nums; i++){
            data.push({
                title: `parent${i}`,
                key: `key-${i}`,
                children: []
            })
            for(let j=0; j<4; j++){
                data[i].children.push({
                    title: `parent-${i}-${j}`,
                    key: `key-${i}-${j}`,
                    children: []
                })
                for(let k=0; k<4; k++){
                    data[i].children[j].children.push({
                        title: `parent-${i}-${j}-${k}`,
                        key: `key-${i}-${j}-${k}`,
                        children: []
                    })
                }
            }   
        }
        return data;
      }

  render() {
    const treeData = this.mockData(400);
    return (
      <div>
        <Tree 
            treeData={treeData}
        />
      </div>
    );
  }
}

