/* @ds-bundle: {"format":3,"namespace":"VerttOSDesignSystem_fffbe3","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"StatusPill","sourcePath":"components/data/StatusPill.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"NavSection","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"}],"sourceHashes":{"components/core/Button.jsx":"b5ff50120dba","components/core/Checkbox.jsx":"058e41ab7024","components/core/IconButton.jsx":"f7e4e4073adc","components/core/Input.jsx":"2815806b17f2","components/core/Radio.jsx":"5614868d8581","components/core/SegmentedControl.jsx":"bcf583db0c85","components/core/Select.jsx":"b0e42e8737b9","components/core/Switch.jsx":"e36fc992ce2d","components/data/Avatar.jsx":"d85a0448d106","components/data/Badge.jsx":"4119ff428435","components/data/ProgressBar.jsx":"63df2732acbb","components/data/StatCard.jsx":"7a74c7923169","components/data/StatusPill.jsx":"9eb973e24bda","components/data/Table.jsx":"75ced4ae220a","components/data/Tag.jsx":"55db9d61a38e","components/feedback/Alert.jsx":"651cbeee570d","components/feedback/Dialog.jsx":"1de6c3112f4e","components/feedback/Toast.jsx":"e0e920127741","components/feedback/Tooltip.jsx":"d6c495d18794","components/navigation/Breadcrumb.jsx":"708d19c3addb","components/navigation/NavItem.jsx":"9a7a635ef46a","components/navigation/SidebarNav.jsx":"5b21cbbfac4a","components/navigation/Tabs.jsx":"43b0c1068415","components/surface/Card.jsx":"94cd48d0e632","ui_kits/dispatch/app.jsx":"6b082ce0e694","ui_kits/dispatch/data.js":"edcb01554a62","ui_kits/driver/app.jsx":"3e0549bb72b5","ui_kits/portal/app.jsx":"d956f6c41493"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VerttOSDesignSystem_fffbe3 = window.VerttOSDesignSystem_fffbe3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-height-sm)',
    padding: '0 12px',
    font: 'var(--text-sm)',
    gap: '6px',
    icon: 15
  },
  md: {
    height: 'var(--control-height)',
    padding: '0 16px',
    font: 'var(--text-md)',
    gap: '8px',
    icon: 17
  },
  lg: {
    height: 'var(--control-height-lg)',
    padding: '0 22px',
    font: 'var(--text-lg)',
    gap: '9px',
    icon: 19
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary-bg)',
    bgHover: 'var(--action-primary-bg-hover)',
    fg: 'var(--action-primary-fg)',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--action-accent-bg)',
    bgHover: 'var(--action-accent-bg-hover)',
    fg: 'var(--action-accent-fg)',
    border: 'transparent'
  },
  secondary: {
    bg: 'var(--surface-card)',
    bgHover: 'var(--surface-hover)',
    fg: 'var(--text-primary)',
    border: 'var(--border-default)'
  },
  ghost: {
    bg: 'transparent',
    bgHover: 'var(--surface-hover)',
    fg: 'var(--text-primary)',
    border: 'transparent'
  },
  danger: {
    bg: 'var(--red-600)',
    bgHover: 'var(--red-700)',
    fg: 'var(--pure-white)',
    border: 'transparent'
  }
};

/**
 * Vertt OS Button — primary action control.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1,
      color: v.fg,
      background: isDisabled ? 'var(--neutral-150)' : hover ? v.bgHover : v.bg,
      border: `1px solid ${isDisabled ? 'var(--border-subtle)' : v.border === 'var(--border-default)' && hover ? 'var(--border-strong)' : v.border}`,
      borderRadius: 'var(--radius-md)',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.7 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon
  }), !loading && leftIcon != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, leftIcon), children != null && /*#__PURE__*/React.createElement("span", null, children), !loading && rightIcon != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, rightIcon));
}
function Spinner({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'vx-spin 0.6s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes vx-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/** Checkbox with label. Controlled via `checked` / `onChange`. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  indeterminate = false,
  id,
  style
}) {
  const cbId = id || React.useId();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const isOn = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    id: cbId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-xs)',
      background: isOn ? 'var(--road-black)' : 'var(--surface-card)',
      border: `1.5px solid ${isOn ? 'var(--road-black)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast), border-color var(--duration-fast)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    stroke: "var(--pure-white)",
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--pure-white)",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 30,
  md: 36,
  lg: 44
};
const ICONS = {
  sm: 16,
  md: 18,
  lg: 20
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary-bg)',
    bgHover: 'var(--action-primary-bg-hover)',
    fg: 'var(--action-primary-fg)',
    border: 'transparent'
  },
  secondary: {
    bg: 'var(--surface-card)',
    bgHover: 'var(--surface-hover)',
    fg: 'var(--text-primary)',
    border: 'var(--border-default)'
  },
  ghost: {
    bg: 'transparent',
    bgHover: 'var(--surface-hover)',
    fg: 'var(--text-secondary)',
    border: 'transparent'
  }
};

/** Square icon-only button. Always pass `aria-label`. */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      color: v.fg,
      background: disabled ? 'transparent' : hover ? v.bgHover : v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: ICONS[size],
      height: ICONS[size]
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-height-sm)',
    font: 'var(--text-sm)',
    pad: '0 10px'
  },
  md: {
    height: 'var(--control-height)',
    font: 'var(--text-md)',
    pad: '0 12px'
  },
  lg: {
    height: 'var(--control-height-lg)',
    font: 'var(--text-md)',
    pad: '0 14px'
  }
};

/**
 * Text input with optional label, leading icon, prefix/suffix and error state.
 */
function Input({
  label,
  hint,
  error,
  size = 'md',
  leftIcon,
  suffix,
  disabled = false,
  required = false,
  id,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--swiss-red)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--swiss-red)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: s.height,
      padding: s.pad,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)',
      cursor: disabled ? 'not-allowed' : 'text'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-tertiary)',
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      color: 'var(--text-primary)',
      padding: 0
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-tertiary)',
      flexShrink: 0
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--red-600)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
/** Radio button with label. Group by shared `name`. */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  value,
  id,
  style
}) {
  const rId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: `1.5px solid ${checked ? 'var(--road-black)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--road-black)'
    }
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
/** Segmented control — 2–4 mutually exclusive options. Controlled via value/onChange. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  style
}) {
  const h = size === 'sm' ? 30 : 36;
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 3,
      gap: 2,
      height: h,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      width: fullWidth ? '100%' : 'auto',
      ...style
    }
  }, norm.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: e => onChange && onChange(o.value, e),
      style: {
        flex: fullWidth ? 1 : 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        padding: '0 14px',
        height: '100%',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-sans)',
        fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)',
        fontWeight: 'var(--weight-medium)',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: active ? 'var(--surface-card)' : 'transparent',
        boxShadow: active ? 'var(--shadow-xs)' : 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background var(--duration-fast), color var(--duration-fast)'
      }
    }, o.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 15,
        height: 15
      }
    }, o.icon), o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select dropdown styled to match Input. */
function Select({
  label,
  hint,
  error,
  size = 'md',
  options = [],
  placeholder,
  disabled = false,
  required = false,
  id,
  value,
  onChange,
  style,
  ...rest
}) {
  const heights = {
    sm: 'var(--control-height-sm)',
    md: 'var(--control-height)',
    lg: 'var(--control-height-lg)'
  };
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--swiss-red)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--swiss-red)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: heights[size],
      padding: '0 34px 0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)',
      color: value === '' || value == null ? 'var(--text-tertiary)' : 'var(--text-primary)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 11,
      pointerEvents: 'none',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--red-600)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** On/off switch. Swiss Red when on. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  size = 'md',
  id,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const swId = id || React.useId();
  const dims = size === 'sm' ? {
    w: 32,
    h: 18,
    k: 14
  } : {
    w: 40,
    h: 22,
    k: 18
  };
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: swId,
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: dims.w,
      height: dims.h,
      padding: 0,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: on ? 'var(--swiss-red)' : 'var(--neutral-300)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? dims.w - dims.k - 2 : 2,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: 'var(--pure-white)',
      boxShadow: '0 1px 2px rgba(10,10,10,0.3)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 22,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 56
};
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

/** Avatar — photo or initials, with optional status ring dot. */
function Avatar({
  name = '',
  src,
  size = 'md',
  status,
  square = false,
  style
}) {
  const dim = SIZES[size] || SIZES.md;
  const font = dim <= 28 ? 'var(--text-2xs)' : dim <= 36 ? 'var(--text-xs)' : 'var(--text-md)';
  const statusColors = {
    live: 'var(--green-500)',
    idle: 'var(--neutral-400)',
    alert: 'var(--red-500)',
    pending: 'var(--amber-500)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: dim,
      height: dim,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      borderRadius: square ? 'var(--radius-md)' : '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--neutral-800)',
      color: 'var(--pure-white)',
      fontFamily: 'var(--font-display)',
      fontSize: font,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.01em'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name)), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: Math.max(8, dim * 0.28),
      height: Math.max(8, dim * 0.28),
      borderRadius: '50%',
      background: statusColors[status] || statusColors.idle,
      border: '2px solid var(--surface-card)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
const VARIANTS = {
  neutral: {
    bg: 'var(--neutral-100)',
    fg: 'var(--neutral-700)',
    border: 'transparent'
  },
  solid: {
    bg: 'var(--road-black)',
    fg: 'var(--pure-white)',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--red-50)',
    fg: 'var(--red-700)',
    border: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--text-secondary)',
    border: 'var(--border-default)'
  },
  success: {
    bg: 'var(--green-50)',
    fg: 'var(--green-700)',
    border: 'transparent'
  },
  warning: {
    bg: 'var(--amber-50)',
    fg: 'var(--amber-600)',
    border: 'transparent'
  },
  info: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-600)',
    border: 'transparent'
  }
};

/** Compact label for counts, categories and metadata. */
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  leftIcon,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.neutral;
  const dims = size === 'sm' ? {
    pad: '1px 7px',
    font: 'var(--text-2xs)',
    h: 18
  } : {
    pad: '2px 9px',
    font: 'var(--text-xs)',
    h: 22
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: dims.h,
      padding: dims.pad,
      fontFamily: 'var(--font-sans)',
      fontSize: dims.font,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.01em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: v.fg,
      background: v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 12,
      height: 12
    }
  }, leftIcon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
/** Thin progress / utilization bar. */
function ProgressBar({
  value = 0,
  max = 100,
  color = 'accent',
  size = 'md',
  label,
  showValue = false,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const colors = {
    accent: 'var(--swiss-red)',
    black: 'var(--road-black)',
    success: 'var(--green-500)',
    warning: 'var(--amber-500)',
    info: 'var(--blue-500)'
  };
  const h = size === 'sm' ? 4 : size === 'lg' ? 10 : 6;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: h,
      background: 'var(--neutral-150)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: colors[color] || colors.accent,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
/** Metric card — a KPI value with label, optional delta and sparkline slot. */
function StatCard({
  label,
  value,
  unit,
  delta,
  deltaDirection,
  icon,
  footer,
  style
}) {
  const up = deltaDirection === 'up';
  const down = deltaDirection === 'down';
  const deltaColor = up ? 'var(--green-600)' : down ? 'var(--red-600)' : 'var(--text-tertiary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 'var(--card-padding)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16,
      color: 'var(--text-tertiary)'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-tertiary)'
    }
  }, unit)), (delta != null || footer) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: deltaColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, (up || down) && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: down ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  })), delta), footer && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusPill.jsx
try { (() => {
/**
 * Operational status pill with a signal dot. The mobility-status vocabulary
 * maps directly to the color tokens (live / pending / scheduled / alert / idle / completed).
 */
const STATUS = {
  live: {
    fg: 'var(--status-live-fg)',
    bg: 'var(--status-live-bg)',
    dot: 'var(--status-live-dot)',
    label: 'Live',
    pulse: true
  },
  completed: {
    fg: 'var(--green-700)',
    bg: 'var(--green-50)',
    dot: 'var(--green-500)',
    label: 'Completed'
  },
  pending: {
    fg: 'var(--status-pending-fg)',
    bg: 'var(--status-pending-bg)',
    dot: 'var(--status-pending-dot)',
    label: 'Pending'
  },
  scheduled: {
    fg: 'var(--status-scheduled-fg)',
    bg: 'var(--status-scheduled-bg)',
    dot: 'var(--status-scheduled-dot)',
    label: 'Scheduled'
  },
  alert: {
    fg: 'var(--status-alert-fg)',
    bg: 'var(--status-alert-bg)',
    dot: 'var(--status-alert-dot)',
    label: 'Alert'
  },
  cancelled: {
    fg: 'var(--red-700)',
    bg: 'var(--red-50)',
    dot: 'var(--red-500)',
    label: 'Cancelled'
  },
  idle: {
    fg: 'var(--status-idle-fg)',
    bg: 'var(--status-idle-bg)',
    dot: 'var(--status-idle-dot)',
    label: 'Idle'
  }
};
function StatusPill({
  status = 'idle',
  children,
  size = 'md',
  style
}) {
  const s = STATUS[status] || STATUS.idle;
  const dims = size === 'sm' ? {
    pad: '2px 8px 2px 7px',
    font: 'var(--text-2xs)',
    dot: 6,
    h: 18
  } : {
    pad: '3px 10px 3px 9px',
    font: 'var(--text-xs)',
    dot: 7,
    h: 22
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: dims.h,
      padding: dims.pad,
      fontFamily: 'var(--font-sans)',
      fontSize: dims.font,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: s.fg,
      background: s.bg,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: dims.dot,
      height: dims.dot,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: dims.dot,
      height: dims.dot,
      borderRadius: '50%',
      background: s.dot
    }
  }), s.pulse && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: s.dot,
      animation: 'vx-pulse 1.6s ease-out infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes vx-pulse{0%{transform:scale(1);opacity:.55}70%,100%{transform:scale(2.4);opacity:0}}`))), children || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
/**
 * Data table. Config-driven via `columns` + `data`, or pass raw <tr> children.
 * columns: [{ key, header, width, align, render?(row) }]
 */
function Table({
  columns,
  data,
  rowKey = 'id',
  onRowClick,
  dense = false,
  children,
  style
}) {
  const cellPad = dense ? '8px 14px' : '12px 16px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflowX: 'auto',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)'
    }
  }, columns && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: cellPad,
      width: c.width,
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, children, data && data.map((row, i) => /*#__PURE__*/React.createElement(Row, {
    key: row[rowKey] ?? i,
    row: row,
    columns: columns,
    cellPad: cellPad,
    onRowClick: onRowClick,
    last: i === data.length - 1
  })))));
}
function Row({
  row,
  columns,
  cellPad,
  onRowClick,
  last
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("tr", {
    onClick: onRowClick ? () => onRowClick(row) : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: onRowClick ? 'pointer' : 'default',
      background: hover && onRowClick ? 'var(--surface-hover)' : 'transparent',
      transition: 'background var(--duration-fast)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: cellPad,
      borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
      color: c.muted ? 'var(--text-secondary)' : 'var(--text-primary)',
      fontVariantNumeric: c.align === 'right' ? 'tabular-nums' : 'normal',
      whiteSpace: 'nowrap'
    }
  }, c.render ? c.render(row) : row[c.key])));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
/** Removable chip — used for active filters and multi-select values. */
function Tag({
  children,
  onRemove,
  leftIcon,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: onRemove ? '0 4px 0 10px' : '0 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 13,
      height: 13,
      color: 'var(--text-tertiary)'
    }
  }, leftIcon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      padding: 0,
      marginLeft: 1,
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-xs)',
      cursor: 'pointer',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--blue-50)',
    border: 'var(--blue-100)',
    fg: 'var(--blue-600)',
    icon: 'var(--blue-500)',
    glyph: 'M12 16v-4M12 8h.01'
  },
  success: {
    bg: 'var(--green-50)',
    border: 'var(--green-100)',
    fg: 'var(--green-700)',
    icon: 'var(--green-500)',
    glyph: 'M20 6 9 17l-5-5'
  },
  warning: {
    bg: 'var(--amber-50)',
    border: 'var(--amber-100)',
    fg: 'var(--amber-600)',
    icon: 'var(--amber-500)',
    glyph: 'M12 9v4M12 17h.01'
  },
  danger: {
    bg: 'var(--red-50)',
    border: 'var(--red-100)',
    fg: 'var(--red-700)',
    icon: 'var(--red-500)',
    glyph: 'M12 9v4M12 17h.01'
  }
};

/** Inline alert banner. */
function Alert({
  tone = 'info',
  title,
  children,
  onDismiss,
  action,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '12px 14px',
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 1,
      color: t.icon
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, tone === 'success' ? /*#__PURE__*/React.createElement("path", {
    d: t.glyph
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: t.glyph
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: t.fg
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-snug)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      flexShrink: 0,
      display: 'inline-flex',
      padding: 2,
      border: 'none',
      background: 'transparent',
      color: t.fg,
      cursor: 'pointer',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog with backdrop. Controlled via `open` / `onClose`. */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 460,
  style
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => e.target === e.currentTarget && onClose && onClose(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'rgba(10,10,10,0.44)',
      backdropFilter: 'blur(2px)',
      animation: 'vx-fade var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes vx-fade{from{opacity:0}to{opacity:1}}@keyframes vx-rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      animation: 'vx-rise var(--duration-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      padding: '20px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-tertiary)',
      lineHeight: 'var(--leading-snug)'
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      display: 'inline-flex',
      padding: 4,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-tertiary)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px 22px'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 22px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  neutral: 'var(--road-black)',
  success: 'var(--green-600)',
  danger: 'var(--red-600)',
  warning: 'var(--amber-600)'
};

/** Toast notification — a floating confirmation. Render inside a fixed container. */
function Toast({
  tone = 'neutral',
  title,
  description,
  icon,
  onDismiss,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 340,
      padding: '13px 14px',
      background: 'var(--road-black)',
      color: 'var(--pure-white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 1,
      width: 20,
      height: 20,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: TONES[tone] || TONES.neutral
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--pure-white)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 'var(--leading-snug)'
    }
  }, description)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      flexShrink: 0,
      display: 'inline-flex',
      padding: 2,
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,0.6)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip on hover/focus. Wraps a single trigger child. */
function Tooltip({
  label,
  side = 'top',
  children,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      mb: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      mt: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      mr: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      ml: 8
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 50,
      bottom: pos.bottom,
      top: pos.top,
      left: pos.left,
      right: pos.right,
      transform: pos.transform,
      marginBottom: pos.mb,
      marginTop: pos.mt,
      marginLeft: pos.ml,
      marginRight: pos.mr,
      padding: '5px 9px',
      background: 'var(--road-black)',
      color: 'var(--pure-white)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.3,
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Breadcrumb trail. items: [{label, href?}] — last is current. */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, it.href && !last ? /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-tertiary)',
        textDecoration: 'none'
      }
    }, it.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: last ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: last ? 'var(--text-primary)' : 'var(--text-tertiary)'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--neutral-400)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m9 18 6-6-6-6"
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
/** Single sidebar navigation row. */
function NavItem({
  icon,
  label,
  active = false,
  badge,
  collapsed = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    title: collapsed ? typeof label === 'string' ? label : undefined : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      width: '100%',
      padding: collapsed ? '0' : '0 10px',
      height: 38,
      justifyContent: collapsed ? 'center' : 'flex-start',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
      color: active ? 'var(--pure-white)' : hover ? 'var(--pure-white)' : 'rgba(255,255,255,0.62)',
      background: active ? 'rgba(255,255,255,0.10)' : hover ? 'rgba(255,255,255,0.05)' : 'transparent',
      boxShadow: active ? 'inset 2px 0 0 var(--swiss-red)' : 'none',
      transition: 'background var(--duration-fast), color var(--duration-fast)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, icon), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), !collapsed && badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      padding: '1px 6px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--swiss-red)',
      color: 'var(--pure-white)'
    }
  }, badge));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
/**
 * Dark application sidebar shell. Renders a brand slot, scrollable nav area
 * (pass NavItem children or section groups), and an optional footer slot.
 */
function SidebarNav({
  brand,
  footer,
  collapsed = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: collapsed ? 'var(--sidebar-collapsed)' : 'var(--sidebar-width)',
      height: '100%',
      background: 'var(--road-black)',
      color: 'var(--pure-white)',
      borderRight: '1px solid rgba(255,255,255,0.08)',
      flexShrink: 0,
      transition: 'width var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, brand && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 'var(--topbar-height)',
      padding: collapsed ? '0' : '0 16px',
      justifyContent: collapsed ? 'center' : 'flex-start',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      flexShrink: 0
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: collapsed ? '10px 8px' : '12px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? '10px 8px' : '12px 12px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      flexShrink: 0
    }
  }, footer));
}

/** Optional uppercase group label between nav sections. */
function NavSection({
  label,
  collapsed = false
}) {
  if (collapsed) return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.08)',
      margin: '8px 6px'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 10px 6px',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.38)'
    }
  }, label);
}
Object.assign(__ds_scope, { SidebarNav, NavSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs. Controlled via value/onChange. items: [{value,label,count?,icon?}] */
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      type: "button",
      onClick: e => onChange && onChange(it.value, e),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '10px 12px 12px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-md)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
        transition: 'color var(--duration-fast)'
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 16,
        height: 16
      }
    }, it.icon), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        padding: '1px 6px',
        borderRadius: 'var(--radius-pill)',
        background: active ? 'var(--red-50)' : 'var(--neutral-100)',
        color: active ? 'var(--red-700)' : 'var(--text-tertiary)'
      }
    }, it.count), active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 6,
        right: 6,
        bottom: -1,
        height: 2,
        background: 'var(--swiss-red)',
        borderRadius: '2px 2px 0 0'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surface/Card.jsx
try { (() => {
/** Generic surface container with optional header (title/subtitle/actions) and footer. */
function Card({
  title,
  subtitle,
  actions,
  footer,
  padding = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      ...style
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-tertiary)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding ? '20px' : 0,
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '14px 20px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dispatch/app.jsx
try { (() => {
/* global React */
const DS = window.VerttOSDesignSystem_fffbe3;
const {
  Button,
  IconButton,
  Input,
  Select,
  SegmentedControl,
  Badge,
  StatusPill,
  Tag,
  Avatar,
  StatCard,
  Table,
  ProgressBar,
  Card,
  Alert,
  Tooltip,
  Dialog,
  Tabs,
  Breadcrumb,
  SidebarNav,
  NavItem,
  NavSection
} = DS;
function Icon({
  name,
  size = 18,
  color,
  style
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`
    }
  });
}
function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

/* ---------------- Operational map ---------------- */
function MapPanel({
  points,
  height = '100%',
  showRoutes = true
}) {
  const color = {
    live: 'var(--green-500)',
    scheduled: 'var(--blue-500)',
    pending: 'var(--amber-500)',
    alert: 'var(--red-500)',
    idle: 'var(--neutral-400)',
    completed: 'var(--neutral-500)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height,
      background: '#EDEFF1',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "mg",
    width: "56",
    height: "56",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M56 0H0V56",
    fill: "none",
    stroke: "#E0E2E5",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#mg)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 120 Q 300 90 640 200 T 1300 240",
    fill: "none",
    stroke: "#DADDE0",
    strokeWidth: "14",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M180 -20 Q 240 260 520 420 T 900 760",
    fill: "none",
    stroke: "#DADDE0",
    strokeWidth: "12",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 360 Q 400 340 760 300 T 1400 360",
    fill: "none",
    stroke: "#E3E5E8",
    strokeWidth: "18",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 -20 Q 200 200 160 420 T 300 900",
    fill: "none",
    stroke: "#CFE0E6",
    strokeWidth: "22",
    strokeLinecap: "round",
    opacity: "0.8"
  })), points.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: p.x + '%',
      top: p.y + '%',
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50% 50% 50% 2px',
      background: color[p.status] || color.idle,
      transform: 'rotate(45deg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 3px 8px rgba(10,10,10,.28)',
      border: '2px solid #fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-45deg)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "car-front",
    size: 15,
    color: "#fff"
  }))), p.label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      background: 'var(--road-black)',
      color: '#fff',
      padding: '1px 6px',
      borderRadius: 4,
      whiteSpace: 'nowrap'
    }
  }, p.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: ctrlBtn
  }, "+"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: ctrlBtn
  }, "\u2212")), /*#__PURE__*/React.createElement("button", {
    style: {
      ...ctrlBtn,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "locate-fixed",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: 14,
      display: 'flex',
      gap: 8,
      background: 'rgba(255,255,255,.92)',
      padding: '7px 11px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, [['Live', 'var(--green-500)'], ['Scheduled', 'var(--blue-500)'], ['Idle', 'var(--neutral-400)'], ['Alert', 'var(--red-500)']].map(([l, c]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c
    }
  }), l))));
}
const ctrlBtn = {
  width: 34,
  height: 32,
  border: 'none',
  background: '#fff',
  color: 'var(--text-primary)',
  fontSize: 17,
  fontWeight: 600,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

/* ---------------- Screens ---------------- */
function Overview({
  data
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Live trips",
    value: "24",
    delta: "+6",
    deltaDirection: "up",
    footer: "vs. 1h ago",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "radio",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg. pickup",
    value: "4.2",
    unit: "min",
    delta: "-0.4",
    deltaDirection: "down",
    footer: "target 5.0",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "timer",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "GMV today",
    value: "38.4k",
    unit: "CHF",
    delta: "+8%",
    deltaDirection: "up",
    footer: "vs. yesterday",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "banknote",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "SLA compliance",
    value: "97",
    unit: "%",
    delta: "+1.2",
    deltaDirection: "up",
    footer: "7-day",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Live fleet",
    subtitle: "Z\xFCrich region",
    padding: false,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "maximize-2",
        size: 14
      })
    }, "Open board")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320
    }
  }, /*#__PURE__*/React.createElement(MapPanel, {
    points: data.drivers.map(d => ({
      ...d,
      label: null
    }))
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Operators",
    subtitle: "Connected supply"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, data.operators.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: o.name,
    size: "sm",
    square: true
  }), o.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, o.online, "/", o.drivers, " online")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: o.sla,
    color: o.sla >= 96 ? 'success' : 'warning',
    size: "sm"
  })))))));
}
function DispatchBoard({
  data,
  onSelect
}) {
  const [filter, setFilter] = React.useState('all');
  const shown = data.trips.filter(t => filter === 'all' ? true : t.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '420px 1fr',
      gap: 16,
      height: 'calc(100vh - 148px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search trips, clients\u2026",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    ariaLabel: "Filter"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal"
  }))), /*#__PURE__*/React.createElement(SegmentedControl, {
    fullWidth: true,
    size: "sm",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'live',
      label: 'Live'
    }, {
      value: 'pending',
      label: 'Pending'
    }, {
      value: 'scheduled',
      label: 'Scheduled'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingRight: 2
    }
  }, shown.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onSelect(t),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, t.id), /*#__PURE__*/React.createElement(StatusPill, {
    status: t.status,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-dot",
    size: 13,
    color: "var(--green-500)"
  }), t.pickup), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13,
    color: "var(--red-500)"
  }), t.drop)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 8,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.driver === '—' ? '?' : t.driver,
    size: "xs"
  }), t.operator), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums'
    }
  }, t.eta)))))), /*#__PURE__*/React.createElement(Card, {
    padding: false,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(MapPanel, {
    points: data.trips.filter(t => ['live', 'scheduled', 'pending', 'alert'].includes(t.status)).map(t => ({
      x: t.x,
      y: t.y,
      status: t.status,
      label: t.id.replace('VT-', '')
    }))
  })));
}
function TripsScreen({
  data,
  onSelect
}) {
  const [tab, setTab] = React.useState('all');
  const filtered = data.trips.filter(t => tab === 'all' ? true : tab === 'active' ? ['live', 'scheduled', 'pending', 'alert'].includes(t.status) : t.status === 'completed');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'all',
      label: 'All trips',
      count: data.trips.length
    }, {
      value: 'active',
      label: 'Active',
      count: 5
    }, {
      value: 'completed',
      label: 'Completed',
      count: 1
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    })
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    })
  }, "New trip"))), /*#__PURE__*/React.createElement(Table, {
    onRowClick: onSelect,
    columns: [{
      key: 'id',
      header: 'Trip',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontFamily: 'var(--font-display)'
        }
      }, r.id)
    }, {
      key: 'route',
      header: 'Route',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-secondary)'
        }
      }, r.pickup, " \u2192 ", r.drop)
    }, {
      key: 'client',
      header: 'Client',
      muted: true
    }, {
      key: 'operator',
      header: 'Operator',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.operator,
        size: "xs",
        square: true
      }), r.operator)
    }, {
      key: 'status',
      header: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.status,
        size: "sm"
      })
    }, {
      key: 'time',
      header: 'Time',
      align: 'right'
    }, {
      key: 'fare',
      header: 'Fare',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r.fare)
    }],
    data: filtered
  }));
}

/* ---------------- Shell ---------------- */
function App() {
  const data = window.VERTT_DATA;
  const [screen, setScreen] = React.useState('dispatch');
  const [selected, setSelected] = React.useState(null);
  React.useEffect(() => {
    refreshIcons();
  });
  const titles = {
    overview: 'Overview',
    dispatch: 'Live dispatch',
    trips: 'Trips',
    fleet: 'Fleet',
    accounts: 'Accounts',
    invoicing: 'Invoicing'
  };
  const nav = [{
    id: 'overview',
    icon: 'layout-dashboard',
    label: 'Overview'
  }, {
    id: 'dispatch',
    icon: 'radio',
    label: 'Dispatch',
    badge: 5
  }, {
    id: 'trips',
    icon: 'route',
    label: 'Trips'
  }, {
    id: 'fleet',
    icon: 'car-front',
    label: 'Fleet'
  }];
  const nav2 = [{
    id: 'accounts',
    icon: 'building-2',
    label: 'Accounts'
  }, {
    id: 'invoicing',
    icon: 'receipt',
    label: 'Invoicing'
  }, {
    id: 'reports',
    icon: 'bar-chart-3',
    label: 'Reports'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    brand: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/vertt-lockup-white.png",
      style: {
        height: 20
      },
      alt: "Vertt+"
    }),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Ops Center",
      size: "sm",
      status: "live"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: '#fff'
      }
    }, "Z\xFCrich Ops"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'rgba(255,255,255,.5)'
      }
    }, "Dispatcher")))
  }, nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    }),
    label: n.label,
    badge: n.badge,
    active: screen === n.id,
    onClick: () => setScreen(n.id)
  })), /*#__PURE__*/React.createElement(NavSection, {
    label: "Business"
  }), nav2.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    }),
    label: n.label,
    active: screen === n.id,
    onClick: () => setScreen(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flexShrink: 0,
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Zürich',
      href: '#'
    }, {
      label: titles[screen] || 'Console'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, titles[screen] || 'Console')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '5px 11px',
      background: 'var(--green-50)',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--green-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--green-500)'
    }
  }), "Live \xB7 87 drivers online"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    ariaLabel: "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    ariaLabel: "Alerts"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    })
  }, "Dispatch"))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 24,
      minHeight: 0
    }
  }, screen === 'overview' && /*#__PURE__*/React.createElement(Overview, {
    data: data
  }), screen === 'dispatch' && /*#__PURE__*/React.createElement(DispatchBoard, {
    data: data,
    onSelect: setSelected
  }), screen === 'trips' && /*#__PURE__*/React.createElement(TripsScreen, {
    data: data,
    onSelect: setSelected
  }), !['overview', 'dispatch', 'trips'].includes(screen) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60%',
      gap: 12,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "construction",
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, titles[screen], " \u2014 demo screen not built in this kit")))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!selected,
    onClose: () => setSelected(null),
    width: 440,
    title: selected ? selected.id : '',
    description: selected ? `${selected.pickup} → ${selected.drop}` : '',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setSelected(null)
    }, "Close"), selected && selected.status === 'pending' ? /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "user-plus",
        size: 15
      }),
      onClick: () => setSelected(null)
    }, "Assign driver") : /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "repeat",
        size: 15
      }),
      onClick: () => setSelected(null)
    }, "Reassign"))
  }, selected && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: selected.status
  }), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, selected.pax, " pax"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, selected.client)), selected.status === 'alert' && /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "Pickup delayed"
  }, "Driver running 9 minutes behind the SLA window."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, [['Operator', selected.operator], ['Driver', selected.driver], ['Vehicle', selected.vehicle], ['Fare', selected.fare], ['Scheduled', selected.time], ['ETA', selected.eta]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, v)))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
refreshIcons();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dispatch/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dispatch/data.js
try { (() => {
/* Vertt OS — Dispatch console mock data (plain globals) */
window.VERTT_DATA = {
  trips: [{
    id: 'VT-4821',
    pickup: 'Zürich HB',
    drop: 'Kloten Airport (ZRH)',
    client: 'Zurich Insurance',
    operator: 'AlpTaxi',
    driver: 'M. Keller',
    vehicle: 'ZH·481923',
    status: 'live',
    eta: '3 min',
    fare: 'CHF 62.00',
    time: '09:42',
    pax: 1,
    x: 62,
    y: 40
  }, {
    id: 'VT-4822',
    pickup: 'Paradeplatz',
    drop: 'Baur au Lac',
    client: 'UBS Group',
    operator: 'Taxi 444',
    driver: 'D. Rossi',
    vehicle: 'ZH·112204',
    status: 'live',
    eta: '1 min',
    fare: 'CHF 28.50',
    time: '09:44',
    pax: 2,
    x: 44,
    y: 62
  }, {
    id: 'VT-4823',
    pickup: 'Bahnhofstrasse 1',
    drop: 'Dolder Grand',
    client: 'Julius Bär',
    operator: 'AlpTaxi',
    driver: 'S. Meier',
    vehicle: 'ZH·309112',
    status: 'live',
    eta: '6 min',
    fare: 'CHF 41.00',
    time: '09:39',
    pax: 1,
    x: 30,
    y: 34
  }, {
    id: 'VT-4824',
    pickup: 'Oerlikon',
    drop: 'ETH Hönggerberg',
    client: 'ETH Zürich',
    operator: 'Léman Cars',
    driver: 'A. Favre',
    vehicle: 'ZH·771043',
    status: 'scheduled',
    eta: '14:30',
    fare: 'CHF 34.00',
    time: '14:30',
    pax: 3,
    x: 72,
    y: 22
  }, {
    id: 'VT-4825',
    pickup: 'Enge',
    drop: 'Kloten Airport (ZRH)',
    client: 'Zurich Insurance',
    operator: 'Taxi 444',
    driver: '—',
    vehicle: '—',
    status: 'pending',
    eta: 'Assign',
    fare: 'CHF 58.00',
    time: '10:05',
    pax: 1,
    x: 50,
    y: 78
  }, {
    id: 'VT-4826',
    pickup: 'Seefeld',
    drop: 'Uni Hospital',
    client: 'USZ Health',
    operator: 'AlpTaxi',
    driver: 'T. Brunner',
    vehicle: 'ZH·550821',
    status: 'completed',
    eta: 'Done',
    fare: 'CHF 22.40',
    time: '09:12',
    pax: 1,
    x: 38,
    y: 48
  }, {
    id: 'VT-4827',
    pickup: 'Altstetten',
    drop: 'Messe Zürich',
    client: 'MCH Group',
    operator: 'Léman Cars',
    driver: 'R. Blanc',
    vehicle: 'ZH·204418',
    status: 'alert',
    eta: '+9 min',
    fare: 'CHF 47.00',
    time: '09:31',
    pax: 4,
    x: 20,
    y: 68
  }],
  drivers: [{
    name: 'M. Keller',
    operator: 'AlpTaxi',
    status: 'live',
    trips: 6,
    rating: 4.9,
    x: 62,
    y: 40
  }, {
    name: 'D. Rossi',
    operator: 'Taxi 444',
    status: 'live',
    trips: 4,
    rating: 4.8,
    x: 44,
    y: 62
  }, {
    name: 'S. Meier',
    operator: 'AlpTaxi',
    status: 'live',
    trips: 5,
    rating: 5.0,
    x: 30,
    y: 34
  }, {
    name: 'A. Favre',
    operator: 'Léman Cars',
    status: 'idle',
    trips: 3,
    rating: 4.7,
    x: 72,
    y: 22
  }, {
    name: 'T. Brunner',
    operator: 'AlpTaxi',
    status: 'idle',
    trips: 7,
    rating: 4.9,
    x: 38,
    y: 48
  }, {
    name: 'R. Blanc',
    operator: 'Léman Cars',
    status: 'alert',
    trips: 2,
    rating: 4.6,
    x: 20,
    y: 68
  }],
  operators: [{
    name: 'AlpTaxi',
    drivers: 42,
    online: 31,
    sla: 98,
    gmv: 'CHF 84.2k'
  }, {
    name: 'Taxi 444',
    drivers: 68,
    online: 44,
    sla: 96,
    gmv: 'CHF 121.8k'
  }, {
    name: 'Léman Cars',
    drivers: 23,
    online: 12,
    sla: 94,
    gmv: 'CHF 48.1k'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dispatch/data.js", error: String((e && e.message) || e) }); }

// ui_kits/driver/app.jsx
try { (() => {
/* global React */
const DS = window.VerttOSDesignSystem_fffbe3;
const {
  Button,
  StatusPill,
  Badge,
  Avatar,
  ProgressBar
} = DS;
function Icon({
  name,
  size = 20,
  color,
  style
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`
    }
  });
}
function refresh() {
  if (window.lucide) window.lucide.createIcons();
}
function MiniMap({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#EDEFF1',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "dm",
    width: "48",
    height: "48",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M48 0H0V48",
    fill: "none",
    stroke: "#E0E2E5",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#dm)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 200 Q 160 160 360 300 T 800 340",
    fill: "none",
    stroke: "#DADDE0",
    strokeWidth: "16",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 -20 Q 180 260 320 460 T 520 900",
    fill: "none",
    stroke: "#DADDE0",
    strokeWidth: "13",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 -20 Q 140 220 110 460 T 220 900",
    fill: "none",
    stroke: "#CFE0E6",
    strokeWidth: "20",
    strokeLinecap: "round",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 640 Q 200 500 300 360",
    fill: "none",
    stroke: "var(--road-black)",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeDasharray: "1 9",
    opacity: "0.6"
  })), children);
}

/* Screen: online toggle home */
function HomeScreen({
  online,
  setOnline,
  onGo
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(MiniMap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '46%',
      top: '54%',
      transform: 'translate(-50%,-50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: online ? 'var(--green-500)' : 'var(--neutral-500)',
      border: '3px solid #fff',
      boxShadow: '0 3px 10px rgba(10,10,10,.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "navigation",
    size: 16,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: '#fff',
      padding: '7px 12px',
      borderRadius: 999,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: online ? 'var(--green-500)' : 'var(--neutral-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, online ? 'Online' : 'Offline')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: '#fff',
      padding: '7px 12px',
      borderRadius: 999,
      boxShadow: 'var(--shadow-sm)',
      fontSize: 13,
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "banknote",
    size: 15,
    color: "var(--green-600)"
  }), "CHF 214")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#fff',
      borderRadius: '20px 20px 0 0',
      boxShadow: '0 -8px 24px rgba(10,10,10,.12)',
      padding: '18px 18px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: 'var(--neutral-200)',
      margin: '0 auto 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, [['Trips', '6'], ['Online', '5h 12m'], ['Rating', '4.9']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700
    }
  }, v)))), online ? /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    size: "lg",
    onClick: () => setOnline(false)
  }, "Go offline") : /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "accent",
    size: "lg",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "power",
      size: 18
    }),
    onClick: () => setOnline(true)
  }, "Go online"), online && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-tertiary)',
      margin: '12px 0 0'
    }
  }, "Searching for B2B requests near you\u2026"), online && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "ghost",
    onClick: onGo
  }, "Simulate incoming request \u2192"))));
}

/* Screen: incoming offer */
function OfferScreen({
  onAccept,
  onDecline
}) {
  const [t, setT] = React.useState(12);
  React.useEffect(() => {
    const i = setInterval(() => setT(x => x > 0 ? x - 1 : 0), 1000);
    return () => clearInterval(i);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(MiniMap, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 90,
      background: '#fff',
      borderRadius: '20px 20px 0 0',
      boxShadow: '0 -8px 24px rgba(10,10,10,.14)',
      padding: '18px 18px 24px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "building-2",
      size: 11
    })
  }, "B2B \xB7 Zurich Insurance"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--red-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "timer",
    size: 15
  }), t, "s")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '-.02em'
    }
  }, "CHF 58"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-tertiary)'
    }
  }, "\xB7 fixed \xB7 22 km")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)',
      margin: '0 0 18px'
    }
  }, "Guaranteed fare \xB7 billed to Vertt"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-dot",
    size: 14,
    color: "var(--green-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      height: 26,
      background: 'var(--neutral-200)',
      margin: '3px 0'
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--red-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Mythenquai 2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "3 min \xB7 1.2 km away")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Kloten Airport (ZRH)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "Terminal 1 \xB7 departures"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onDecline,
    style: {
      flex: 1
    }
  }, "Decline"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onAccept,
    style: {
      flex: 2
    },
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    })
  }, "Accept"))));
}

/* Screen: active trip */
function ActiveScreen({
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(MiniMap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '30%',
      top: '58%',
      transform: 'translate(-50%,-50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50% 50% 50% 2px',
      background: 'var(--road-black)',
      transform: 'rotate(45deg)',
      border: '2px solid #fff',
      boxShadow: '0 3px 8px rgba(10,10,10,.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-45deg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "car-front",
    size: 14,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '46%',
      top: '30%',
      transform: 'translate(-50%,-50%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-dot",
    size: 18,
    color: "var(--green-500)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 16,
      right: 16,
      background: 'var(--road-black)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "corner-up-right",
    size: 26,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      fontFamily: 'var(--font-display)'
    }
  }, "250 m"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Turn right onto Seestrasse")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 13,
      fontWeight: 600
    }
  }, "3 min")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#fff',
      borderRadius: '20px 20px 0 0',
      boxShadow: '0 -8px 24px rgba(10,10,10,.12)',
      padding: '16px 18px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: 'var(--neutral-200)',
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "live"
  }, "En route to pickup"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "CHF 58")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "M Schneider",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "M. Schneider"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "Zurich Insurance \xB7 Business")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: circBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    style: circBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-square",
    size: 18
  })))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "primary",
    size: "lg",
    onClick: onDone,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Arrived at pickup")));
}
const circBtn = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '1px solid var(--border-default)',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'var(--text-primary)'
};
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      borderRadius: 46,
      background: '#000',
      padding: 11,
      boxShadow: '0 40px 80px rgba(10,10,10,.32)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 36,
      overflow: 'hidden',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      zIndex: 30,
      fontSize: 13,
      fontWeight: 600,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 120,
      height: 30,
      background: '#000',
      borderRadius: 16,
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      paddingTop: 44
    }
  }, children)));
}
function DriverApp() {
  const [screen, setScreen] = React.useState('home');
  const [online, setOnline] = React.useState(true);
  React.useEffect(() => {
    refresh();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--road-black)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 60,
      padding: 40,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(70% 90% at 100% 40%, rgba(218,41,28,.4), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/vertt-lockup-white.png",
    style: {
      height: 26,
      marginBottom: 20
    },
    alt: "Vertt+"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 800,
      color: '#fff',
      letterSpacing: '-.025em',
      lineHeight: 1.05,
      margin: '0 0 14px'
    }
  }, "Driver app"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,.62)',
      lineHeight: 1.55,
      margin: '0 0 24px'
    }
  }, "Predictable B2B demand, guaranteed fares, one tap to accept. Tap through the flow \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [['home', 'Home · online toggle'], ['offer', 'Incoming request'], ['active', 'Active trip']].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setScreen(id),
    style: {
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      border: '1px solid rgba(255,255,255,.14)',
      background: screen === id ? 'rgba(255,255,255,.12)' : 'transparent',
      color: '#fff',
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: screen === id ? 'var(--swiss-red)' : 'rgba(255,255,255,.3)'
    }
  }), label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Phone, null, screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    online: online,
    setOnline: setOnline,
    onGo: () => setScreen('offer')
  }), screen === 'offer' && /*#__PURE__*/React.createElement(OfferScreen, {
    onAccept: () => setScreen('active'),
    onDecline: () => setScreen('home')
  }), screen === 'active' && /*#__PURE__*/React.createElement(ActiveScreen, {
    onDone: () => setScreen('home')
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(DriverApp, null));
refresh();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/driver/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/app.jsx
try { (() => {
/* global React */
const DS = window.VerttOSDesignSystem_fffbe3;
const {
  Button,
  IconButton,
  Input,
  Select,
  SegmentedControl,
  Checkbox,
  Radio,
  Badge,
  StatusPill,
  Tag,
  Avatar,
  StatCard,
  Table,
  ProgressBar,
  Card,
  Alert,
  Tabs,
  Breadcrumb
} = DS;
function Icon({
  name,
  size = 18,
  color,
  style
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`
    }
  });
}
function refresh() {
  if (window.lucide) window.lucide.createIcons();
}
const TRIPS = [{
  id: 'VT-4826',
  date: '2 Jul · 09:12',
  route: 'Seefeld → Uni Hospital',
  pax: 'Dr. A. Huber',
  cost: 'CHF 22.40',
  status: 'completed'
}, {
  id: 'VT-4831',
  date: '2 Jul · 14:30',
  route: 'HQ → Kloten Airport (ZRH)',
  pax: 'M. Schneider',
  cost: 'CHF 58.00',
  status: 'scheduled'
}, {
  id: 'VT-4833',
  date: '2 Jul · 16:00',
  route: 'HQ → Baur au Lac',
  pax: 'Board guests (3)',
  cost: 'CHF 41.00',
  status: 'scheduled'
}, {
  id: 'VT-4809',
  date: '1 Jul · 08:05',
  route: 'Enge → Messe Zürich',
  pax: 'L. Frei',
  cost: 'CHF 34.00',
  status: 'completed'
}, {
  id: 'VT-4788',
  date: '30 Jun · 19:40',
  route: 'HQ → Dolder Grand',
  pax: 'CEO office',
  cost: 'CHF 47.00',
  status: 'completed'
}];
const INVOICES = [{
  id: 'INV-2026-06',
  period: 'June 2026',
  trips: 284,
  amount: 'CHF 18,420.00',
  status: 'pending',
  due: '15 Jul 2026'
}, {
  id: 'INV-2026-05',
  period: 'May 2026',
  trips: 261,
  amount: 'CHF 16,980.50',
  status: 'completed',
  due: 'Paid'
}, {
  id: 'INV-2026-04',
  period: 'April 2026',
  trips: 248,
  amount: 'CHF 15,310.00',
  status: 'completed',
  due: 'Paid'
}];

/* ---- Booking flow ---- */
function Booking() {
  const [step, setStep] = React.useState(1);
  const [pay, setPay] = React.useState('invoice');
  const [vehicle, setVehicle] = React.useState('business');
  const steps = ['Route', 'Options', 'Review'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Book a trip",
    subtitle: "Corporate booking \xB7 Zurich Insurance"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      background: step > i ? 'var(--road-black)' : step === i + 1 ? 'var(--road-black)' : 'var(--neutral-150)',
      color: step >= i + 1 ? '#fff' : 'var(--text-tertiary)'
    }
  }, step > i + 1 ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: step === i + 1 ? 600 : 500,
      color: step === i + 1 ? 'var(--text-primary)' : 'var(--text-tertiary)'
    }
  }, s), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  })))), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Pickup",
    defaultValue: "Mythenquai 2, 8002 Z\xFCrich",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "circle-dot",
      size: 15,
      color: "var(--green-500)"
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Destination",
    defaultValue: "Kloten Airport (ZRH)",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 15,
      color: "var(--red-500)"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Date",
    defaultValue: "2 Jul 2026",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 15
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Time",
    defaultValue: "14:30",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15
    })
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Passenger",
    defaultValue: "M. Schneider",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 15
    })
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      margin: '0 0 10px'
    }
  }, "Vehicle class"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [['business', 'Business', 'Mercedes E / BMW 5', 'CHF 58'], ['van', 'Business Van', 'Up to 6 passengers', 'CHF 74'], ['first', 'First', 'Mercedes S / EQS', 'CHF 96']].map(([v, t, d, p]) => /*#__PURE__*/React.createElement("label", {
    key: v,
    onClick: () => setVehicle(v),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 12,
      cursor: 'pointer',
      border: `1px solid ${vehicle === v ? 'var(--road-black)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      background: vehicle === v ? 'var(--surface-sunken)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: vehicle === v,
    onChange: () => setVehicle(v)
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "car-front",
    size: 20,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, d)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums'
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Flight tracking (adjust pickup to arrival)",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Meet & greet at arrivals"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Wheelchair accessible"
  }))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Reliability guarantee"
  }, "A vetted, compliant operator is confirmed within 60 seconds. No-show protection included."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Billing"), /*#__PURE__*/React.createElement(Radio, {
    name: "pay",
    label: "Monthly consolidated invoice",
    checked: pay === 'invoice',
    onChange: () => setPay('invoice')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "pay",
    label: "Corporate card \xB7\xB7\xB7\xB7 4471",
    checked: pay === 'card',
    onChange: () => setPay('card')
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Cost centre",
    defaultValue: "CH-EXEC-004",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "hash",
      size: 15
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    disabled: step === 1,
    onClick: () => setStep(s => Math.max(1, s - 1))
  }, "Back"), step < 3 ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }),
    onClick: () => setStep(s => s + 1)
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }),
    onClick: () => setStep(1)
  }, "Confirm booking"))), /*#__PURE__*/React.createElement(Card, {
    title: "Summary"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(SummaryRow, {
    icon: "circle-dot",
    label: "Mythenquai 2, Z\xFCrich",
    color: "var(--green-500)"
  }), /*#__PURE__*/React.createElement(SummaryRow, {
    icon: "map-pin",
    label: "Kloten Airport (ZRH)",
    color: "var(--red-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(SummaryRow, {
    icon: "calendar",
    label: "2 Jul 2026 \xB7 14:30"
  }), /*#__PURE__*/React.createElement(SummaryRow, {
    icon: "car-front",
    label: vehicle === 'first' ? 'First' : vehicle === 'van' ? 'Business Van' : 'Business'
  }), /*#__PURE__*/React.createElement(SummaryRow, {
    icon: "user",
    label: "M. Schneider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "Estimated fare"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "CHF ", vehicle === 'first' ? '96' : vehicle === 'van' ? '74' : '58')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "Billed to monthly invoice \xB7 fixed price, no surge."))));
}
function SummaryRow({
  icon,
  label,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15,
    color: color || 'var(--text-tertiary)'
  }), label);
}
function TripsView() {
  const [tab, setTab] = React.useState('upcoming');
  const rows = TRIPS.filter(t => tab === 'upcoming' ? t.status === 'scheduled' : tab === 'past' ? t.status === 'completed' : true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'upcoming',
      label: 'Upcoming',
      count: 2
    }, {
      value: 'past',
      label: 'Past'
    }, {
      value: 'all',
      label: 'All'
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search trips\u2026",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    size: "sm",
    style: {
      width: 240
    }
  })), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'id',
      header: 'Trip',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontFamily: 'var(--font-display)'
        }
      }, r.id)
    }, {
      key: 'date',
      header: 'When',
      muted: true
    }, {
      key: 'route',
      header: 'Route'
    }, {
      key: 'pax',
      header: 'Passenger',
      muted: true
    }, {
      key: 'status',
      header: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.status,
        size: "sm"
      })
    }, {
      key: 'cost',
      header: 'Cost',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r.cost)
    }],
    data: rows
  }));
}
function InvoicesView() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Open balance",
    value: "18,420",
    unit: "CHF",
    footer: "Due 15 Jul",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Trips this month",
    value: "284",
    delta: "+9%",
    deltaDirection: "up",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "route",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg. cost / trip",
    value: "64.9",
    unit: "CHF",
    delta: "-2%",
    deltaDirection: "down",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "trending-down",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Invoices",
    subtitle: "Consolidated monthly billing",
    padding: false,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 14
      })
    }, "Export all")
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'id',
      header: 'Invoice',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontFamily: 'var(--font-display)'
        }
      }, r.id)
    }, {
      key: 'period',
      header: 'Period'
    }, {
      key: 'trips',
      header: 'Trips',
      align: 'right',
      muted: true
    }, {
      key: 'amount',
      header: 'Amount',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r.amount)
    }, {
      key: 'status',
      header: 'Status',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.status === 'pending' ? 'pending' : 'completed',
        size: "sm"
      }, r.status === 'pending' ? 'Due' : 'Paid')
    }, {
      key: 'due',
      header: 'Due',
      align: 'right',
      muted: true
    }],
    data: INVOICES
  })));
}
function Portal() {
  const [screen, setScreen] = React.useState('book');
  React.useEffect(() => {
    refresh();
  });
  const titles = {
    book: 'Book a trip',
    trips: 'Trips',
    invoices: 'Invoicing',
    team: 'Team'
  };
  const nav = [['book', 'Book', 'plus-circle'], ['trips', 'Trips', 'route'], ['invoices', 'Invoicing', 'receipt'], ['team', 'Team', 'users']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/vertt-lockup-black.png",
    style: {
      height: 22
    },
    alt: "Vertt+"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, nav.map(([id, label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setScreen(id),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '7px 13px',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: screen === id ? 600 : 500,
      color: screen === id ? 'var(--text-primary)' : 'var(--text-tertiary)',
      background: screen === id ? 'var(--surface-sunken)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building-2",
    size: 16
  }), "Zurich Insurance"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    ariaLabel: "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Marta Good",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '28px 28px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Zurich Insurance',
      href: '#'
    }, {
      label: titles[screen]
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginTop: 6
    }
  }, titles[screen])), screen === 'book' && /*#__PURE__*/React.createElement(Booking, null), screen === 'trips' && /*#__PURE__*/React.createElement(TripsView, null), screen === 'invoices' && /*#__PURE__*/React.createElement(InvoicesView, null), screen === 'team' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 0',
      gap: 12,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 40
  }), /*#__PURE__*/React.createElement("span", null, "Team administration \u2014 demo screen not built in this kit"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Portal, null));
refresh();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.NavSection = __ds_scope.NavSection;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

})();
