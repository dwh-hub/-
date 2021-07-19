/**
  let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]
  转为
  [
    {
      id: 1,
      name: "部门1",
      pid: 0,
      children: [
        {
          id: 2,
          name: "部门2",
          pid: 1,
          children: [],
        },
        {
          id: 3,
          name: "部门3",
          pid: 1,
          children: [
            // 结果 ,,,
          ],
        },
      ],
    },
  ];
 */

// mock数据
function randomFun(index) {
  const id = Math.floor(Math.random() * index);
  return id;
}
var arr_test = Array.from({ length: 10 }, (item, index) => {
  return { id: index, name: `dep:${index + 1}`, pid: randomFun(index) };
});

// map引用方式
function arrayToTree_1(list) {
  let result = [];
  let mapData = {};
  for (let item of list) {
    const id = item.id;
    const pid = item.pid;

    if (!mapData[id]) {
      mapData[id] = {
        children: [],
      };
    }

    mapData[id] = {
      ...item,
      children: mapData[id]["children"],
    };

    let treeItem = mapData[id];

    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!mapData[pid]) {
        mapData[pid] = {
          children: [],
        };
      }
      mapData[pid].children.push(treeItem);
    }
  }
  return result;
}

console.time('time')
arrayToTree_1(arr_test)
console.timeEnd('time')

