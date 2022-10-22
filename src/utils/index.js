/**
 * 表单必填规则配置项
 */
export const requiredRule = [{ required: true, message: '请填写此项' }];

/**
 * 为表格数据添加“序号”列
 */
export function addListIndex(list, params, key = 'index') {
  const { current = 1, pageSize = 20 } = params || {};
  return (
    list &&
    list.map?.((item, index) => ({
      ...item,
      [key]: (current - 1) * pageSize + index + 1,
    }))
  );
}
