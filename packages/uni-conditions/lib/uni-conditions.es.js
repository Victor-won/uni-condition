import D, { defineComponent as v, ref as C, computed as d, watch as M } from "vue";
D.util.warn;
const N = v({
  components: {},
  name: "Condition",
  props: {
    parentIndex: {
      type: Number
    },
    condition: {
      type: Object,
      required: !0
    },
    showOperators: {
      type: Boolean,
      default: !1
    },
    getOptions: {
      type: Function,
      default: () => []
    }
  },
  setup(i, { emit: t, slots: o }) {
    console.log("Setting", o);
    const e = C(i.condition), r = d(() => {
      var n;
      return Object.keys(((n = i.condition) == null ? void 0 : n.operand) || {});
    });
    return M(() => i.condition, (n) => {
      e.value = n;
    }), M(e, (n) => {
      t("update:condition", n);
    }, { deep: !0 }), {
      emit: t,
      props: i,
      operandKeys: r,
      condition: e,
      slots: o
    };
  }
}), A = "data:image/svg+xml;base64,PHN2ZyB0PSIxNzIzNDQxMjk2NTQ4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MDQiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDEyOGEzODQgMzg0IDAgMSAwIDAgNzY4QTM4NCAzODQgMCAwIDAgNTEyIDEyOHpNNDIuNjg4IDUxMmE0NjkuMzEyIDQ2OS4zMTIgMCAxIDEgOTM4LjYyNCAwQTQ2OS4zMTIgNDY5LjMxMiAwIDAgMSA0Mi42ODggNTEyeiBtMjU2IDBjMC0yMy41NTIgMTkuMDcyLTQyLjY4OCA0Mi42MjQtNDIuNjg4aDM0MS4zNzZhNDIuNjg4IDQyLjY4OCAwIDEgMSAwIDg1LjM3NkgzNDEuMzEyQTQyLjY4OCA0Mi42ODggMCAwIDEgMjk4LjY4OCA1MTJ6IiBmaWxsPSIjMGEwM2ViIiBwLWlkPSIxNzA1Ij48L3BhdGg+PC9zdmc+Cg==", O = "data:image/svg+xml;base64,PHN2ZyB0PSIxNzIzNDQxMjU5NzAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1NDQiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDEyOGEzODQgMzg0IDAgMSAwIDAgNzY4QTM4NCAzODQgMCAwIDAgNTEyIDEyOHpNNDIuNjg4IDUxMmE0NjkuMzEyIDQ2OS4zMTIgMCAxIDEgOTM4LjYyNCAwQTQ2OS4zMTIgNDY5LjMxMiAwIDAgMSA0Mi42ODggNTEyek01MTIgMjk4LjY4OGMyMy41NTIgMCA0Mi42ODggMTkuMDcyIDQyLjY4OCA0Mi42MjR2MTI4aDEyOGE0Mi42ODggNDIuNjg4IDAgMSAxIDAgODUuMzc2aC0xMjh2MTI4YTQyLjY4OCA0Mi42ODggMCAxIDEtODUuMzc2IDB2LTEyOGgtMTI4YTQyLjY4OCA0Mi42ODggMCAwIDEgMC04NS4zNzZoMTI4di0xMjhjMC0yMy41NTIgMTkuMTM2LTQyLjYyNCA0Mi42ODgtNDIuNjI0eiIgZmlsbD0iIzBhMDNlYiIgcC1pZD0iMTU0NSI+PC9wYXRoPjwvc3ZnPgo=";
function f(i, t, o, e, r, n, a, u) {
  var s = typeof i == "function" ? i.options : i;
  t && (s.render = t, s.staticRenderFns = o, s._compiled = !0), e && (s.functional = !0), n && (s._scopeId = "data-v-" + n);
  var c;
  if (a ? (c = function(l) {
    l = l || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !l && typeof __VUE_SSR_CONTEXT__ < "u" && (l = __VUE_SSR_CONTEXT__), r && r.call(this, l), l && l._registeredComponents && l._registeredComponents.add(a);
  }, s._ssrRegister = c) : r && (c = u ? function() {
    r.call(
      this,
      (s.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), c)
    if (s.functional) {
      s._injectStyles = c;
      var m = s.render;
      s.render = function(I, y) {
        return c.call(y), m(I, y);
      };
    } else {
      var g = s.beforeCreate;
      s.beforeCreate = g ? [].concat(g, c) : [c];
    }
  return {
    exports: i,
    options: s
  };
}
var j = function() {
  var t = this, o = t._self._c;
  return t._self._setupProxy, t.condition ? o("div", { staticClass: "uni-condition__item" }, [o("div", { staticClass: "uni-condition__operand" }, [t._l(t.operandKeys, function(e) {
    return t._t(`${e}Slot`, function() {
      return [o("select", { directives: [{ name: "model", rawName: "v-model", value: t.condition.operand[e], expression: "condition.operand[operand]" }], attrs: { placeholder: "请选择" }, on: { change: function(r) {
        var n = Array.prototype.filter.call(r.target.options, function(a) {
          return a.selected;
        }).map(function(a) {
          var u = "_value" in a ? a._value : a.value;
          return u;
        });
        t.$set(t.condition.operand, e, r.target.multiple ? n : n[0]);
      } } }, t._l(t.props.getOptions(t.condition, e), function(r) {
        return o("option", { key: r.value, domProps: { value: r.value } }, [t._v(" " + t._s(r.label) + " ")]);
      }), 0)];
    }, { condition: t.condition, property: e });
  })], 2), o("div", { staticClass: "uni-condition__operator" }, [t._t("operatorSlot", function() {
    return [o("select", { directives: [{ name: "model", rawName: "v-model", value: t.condition.operator, expression: "condition.operator" }], attrs: { placeholder: "请选择" }, on: { change: function(e) {
      var r = Array.prototype.filter.call(e.target.options, function(n) {
        return n.selected;
      }).map(function(n) {
        var a = "_value" in n ? n._value : n.value;
        return a;
      });
      t.$set(t.condition, "operator", e.target.multiple ? r : r[0]);
    } } }, t._l(t.props.getOptions(t.condition, "operator"), function(e) {
      return o("option", { key: e.value, domProps: { value: e.value } }, [t._v(" " + t._s(e.label) + " ")]);
    }), 0)];
  }, { condition: t.condition, property: "operator" })], 2), o("div", { staticClass: "uni-condition__value" }, [t._t("valueSlot", function() {
    return [t._l(t.condition.value, function(e, r) {
      return [o("div", { staticClass: "uni-condition__value-item" }, [o("select", { directives: [{ name: "model", rawName: "v-model", value: e.valueType, expression: "value.valueType" }], attrs: { name: "valueType", placeholder: "请选择" }, on: { change: function(n) {
        var a = Array.prototype.filter.call(n.target.options, function(u) {
          return u.selected;
        }).map(function(u) {
          var s = "_value" in u ? u._value : u.value;
          return s;
        });
        t.$set(e, "valueType", n.target.multiple ? a : a[0]);
      } } }, t._l(t.props.getOptions(t.condition, "valueType"), function(n) {
        return o("option", { key: n.value, domProps: { value: n.value } }, [t._v(" " + t._s(n.label) + " ")]);
      }), 0)]), o("div", { staticClass: "uni-condition__value-item" }, [o("input", { directives: [{ name: "model", rawName: "v-model", value: e.value, expression: "value.value" }], attrs: { type: "text" }, domProps: { value: e.value }, on: { input: function(n) {
        n.target.composing || t.$set(e, "value", n.target.value);
      } } })])];
    })];
  }, { condition: t.condition, property: "value" })], 2), t.props.showOperators ? o("div", { staticClass: "uni-condition__value-operator" }, [o("img", { attrs: { src: A, width: "20", alt: "" }, on: { click: function(e) {
    return t.emit("remove");
  } } }), o("img", { attrs: { src: O, width: "20", alt: "" }, on: { click: function(e) {
    return t.emit("add");
  } } })]) : t._e()]) : t._e();
}, T = [], h = /* @__PURE__ */ f(
  N,
  j,
  T,
  !1,
  null,
  "6ed38d79",
  null,
  null
);
const p = h.exports, w = [
  {
    label: "且",
    value: "AND"
  },
  {
    label: "或",
    value: "OR"
  }
], E = {
  isGroup: {
    type: Boolean,
    default: !1
  },
  parentIndex: {
    type: Number
  },
  conditions: {
    type: Object,
    default: () => ({
      type: "AND",
      conditions: []
    })
  },
  getOptions: {
    type: Function,
    default: () => []
  },
  add: {
    type: Function
  },
  slotProps: {
    type: Object,
    default: () => ({})
  }
}, z = v({
  name: "ConditionGroup",
  components: {
    Condition: p
  },
  props: E,
  setup(i, { emit: t, slots: o }) {
    const e = d(() => Object.keys(o)), r = d(() => i.conditions.conditions.length > 1);
    return {
      operator: w,
      showTypeFlag: r,
      props: i,
      removeHandler: (u, s) => {
        if (i.conditions.conditions.length === 1) {
          i.isGroup || t("remove", u, s);
          return;
        }
        i.conditions.conditions.splice(u, 1);
      },
      addHandler: () => {
        if (!i.add)
          throw new Error("props.add is required");
        if (i.isGroup) {
          i.conditions.conditions.push({
            type: "AND",
            conditions: [i.add()]
          });
          return;
        }
        i.conditions.conditions.push(i.add());
      },
      emit: t,
      slotsMap: e
    };
  }
});
var x = function() {
  var t = this, o = t._self._c;
  return t._self._setupProxy, o("div", { staticClass: "uni-condition__group" }, [t.props.isGroup ? o("div", { staticClass: "uni-condition__add" }, [o("a", { attrs: { href: "javascript:" }, on: { click: t.addHandler } }, [t._v("添加条件组")])]) : t._e(), o("div", { staticClass: "uni-condition__content", class: { "show-type": t.showTypeFlag } }, [t.showTypeFlag ? o("div", { staticClass: "uni-condition__type" }, [o("select", { directives: [{ name: "model", rawName: "v-model", value: t.props.conditions.type, expression: "props.conditions.type" }], on: { change: function(e) {
    var r = Array.prototype.filter.call(e.target.options, function(n) {
      return n.selected;
    }).map(function(n) {
      var a = "_value" in n ? n._value : n.value;
      return a;
    });
    t.$set(t.props.conditions, "type", e.target.multiple ? r : r[0]);
  } } }, t._l(t.operator, function(e) {
    return o("option", { domProps: { value: e.value } }, [t._v(t._s(e.label))]);
  }), 0)]) : t._e(), t.props.isGroup ? t._l(t.props.conditions.conditions, function(e, r) {
    return o("condition-group", { key: r, attrs: { conditions: e, getOptions: t.props.getOptions, isGroup: !1, parentIndex: r, add: t.props.add }, on: { "update:conditions": function(n) {
      e = n;
    }, remove: function(n) {
      return t.removeHandler(r, t.props.parentIndex);
    }, add: t.addHandler }, scopedSlots: t._u([t._l(t.slotsMap, function(n, a) {
      return { key: n, fn: function(u) {
        return [t._t(n, null, null, u)];
      } };
    })], null, !0) });
  }) : t._l(t.props.conditions.conditions, function(e, r) {
    return o("condition", { key: r, attrs: { parentIndex: r, condition: e, getOptions: t.props.getOptions, showOperators: !0 }, on: { "update:condition": function(n) {
      e = n;
    }, remove: function(n) {
      return t.removeHandler(r, t.props.parentIndex);
    }, add: t.addHandler }, scopedSlots: t._u([t._l(t.slotsMap, function(n, a) {
      return { key: n, fn: function(u) {
        return [t._t(n, null, null, u)];
      } };
    })], null, !0) });
  })], 2), t.props.isGroup ? t._e() : o("div", { staticClass: "uni-condition__group-operator", on: { click: function(e) {
    return t.emit("remove");
  } } }, [t._v("✕")])]);
}, S = [], Q = /* @__PURE__ */ f(
  z,
  x,
  S,
  !1,
  null,
  "a730d338",
  null,
  null
);
const $ = Q.exports, k = v({
  name: "UniCondition",
  components: {
    ConditionGroup: $
  },
  props: {
    title: {
      type: String,
      default: "条件组"
    },
    type: {
      type: String,
      default: "SINGLE"
    },
    // 条件初始值
    conditions: {
      type: Object
    },
    // NOTE - 设置添加条件时，需要返回一个条件对象
    // 如：{ operand: { factor: "name" }, operator: 'equal', value: [{ valueType: 'customer', value: '123 }]}
    add: {
      type: Function,
      // 类型为函数
      default: () => ({})
      // 默认值为空函数
    },
    noDataText: {
      type: String,
      // 类型为字符串
      default: "请添加条件或条件组"
      // 默认值为'请添加条件或条件组'
    },
    // NOTE - 计算各项下拉选项数据
    getOptions: {
      type: Function,
      // 类型为函数
      default: () => []
      // 默认值为空数组
    },
    // NOTE - 输入条件前转换方法
    transformInputParameter: {
      type: Function,
      // 类型为函数
      default: (i) => i
      // 默认值为返回输入值本身
    },
    // NOTE - 输出条件前，转换防范
    transformOutputParameter: {
      type: Function,
      // 类型为函数
      default: (i) => i
      // 默认值为返回输出值本身
    }
  },
  setup(i, { slots: t }) {
    const o = d(() => i.type === "MULTIPLE"), e = d(() => Object.keys(t));
    return {
      isGroup: o,
      props: i,
      slotsMap: e
    };
  }
});
var b = function() {
  var t = this, o = t._self._c;
  return t._self._setupProxy, o("div", { staticClass: "uni-condition__container" }, [o("div", { staticClass: "uni-condition__title" }, [t._v(t._s(t.props.title))]), t.props.conditions ? o("condition-group", { attrs: { conditions: t.props.conditions, getOptions: t.props.getOptions, isGroup: t.isGroup, add: t.props.add }, scopedSlots: t._u([t._l(t.slotsMap, function(e, r) {
    return { key: e, fn: function(n) {
      return [t._t(e, null, null, n)];
    } };
  })], null, !0) }) : o("div", { staticClass: "uni-condition__no-data" }, [t._v(" " + t._s(t.props.noDataText) + " ")])], 1);
}, G = [], P = /* @__PURE__ */ f(
  k,
  b,
  G,
  !1,
  null,
  "31c23971",
  null,
  null
);
const _ = P.exports;
p.install = function(i) {
  i.component(p.name, p);
};
_.install = function(i) {
  i.component(_.name, _);
};
export {
  p as Condition,
  _ as UniCondition
};
