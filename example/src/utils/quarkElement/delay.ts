/**
 * 延迟到下一次宏任务执行
 */
export default (func: Function) => {
  let t: number;
  return function (...args: any) {
    if (t) {
      clearTimeout(t);
    }
    t = setTimeout(() => {
      func(...args);
    });
  };
};
