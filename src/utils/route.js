/**
 *
 * @param [] routes  组件名列表
 * @returns [] routeList  路由列表
 */

function routeConvert(routes) {
  let routeList = [];
  routes.forEach((route, i) => {
    let obj = {};
    obj.id = i + 1;
    let url = `./../views/${route.component}.vue`;
    obj.component = () => import(url);
    let name = /(.+)Test$/.exec(route)[1];
    obj.path = `/${name}`;
    obj.name = name;
    obj.meta = {};
    obj.meta.name = name;
    routeList.push(obj);
  });
  return routeList;
}
export { routeConvert };
