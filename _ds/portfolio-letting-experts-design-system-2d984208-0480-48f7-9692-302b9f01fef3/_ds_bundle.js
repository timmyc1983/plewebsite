/* @ds-bundle: {"format":4,"namespace":"PortfolioLettingExpertsDesignSystem_2d9842","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ContactBar","sourcePath":"ui_kits/website/ContactBar.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"Header","sourcePath":"ui_kits/website/Header.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"LandlordNeeds","sourcePath":"ui_kits/website/LandlordNeeds.jsx"},{"name":"ServiceTiers","sourcePath":"ui_kits/website/ServiceTiers.jsx"},{"name":"TeamSection","sourcePath":"ui_kits/website/TeamSection.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"274ce18fac4d","components/core/Button.jsx":"971041a625c4","components/core/Card.jsx":"d0cff39a7064","components/core/IconButton.jsx":"e5ffb6f4131f","components/core/Tag.jsx":"6d4b4924ee59","components/feedback/Dialog.jsx":"77b694842289","components/feedback/Toast.jsx":"1470cd1c516b","components/feedback/Tooltip.jsx":"46b5822851a1","components/forms/Checkbox.jsx":"53cec232a2d7","components/forms/Input.jsx":"8bc78a302d97","components/forms/Radio.jsx":"7ff0ec298262","components/forms/Select.jsx":"b220d6ca739c","components/forms/Switch.jsx":"533c77e88277","components/navigation/Tabs.jsx":"0eb6ea6eb2a6","ui_kits/website/ContactBar.jsx":"43146ad356ca","ui_kits/website/Footer.jsx":"45822194f03b","ui_kits/website/Header.jsx":"fe8afc67fba1","ui_kits/website/Hero.jsx":"54d5a58cfd60","ui_kits/website/LandlordNeeds.jsx":"86db8bcf733a","ui_kits/website/ServiceTiers.jsx":"172f2b0b2c6e","ui_kits/website/TeamSection.jsx":"f610696a446f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PortfolioLettingExpertsDesignSystem_2d9842 = window.PortfolioLettingExpertsDesignSystem_2d9842 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "pink"
}) {
  const tones = {
    pink: {
      background: "var(--ple-pink-100)",
      color: "var(--ple-pink-700)"
    },
    teal: {
      background: "var(--ple-teal-100)",
      color: "var(--ple-teal-700)"
    },
    navy: {
      background: "var(--ple-navy-100)",
      color: "var(--ple-navy-900)"
    },
    neutral: {
      background: "var(--ple-gray-100)",
      color: "var(--ple-gray-800)"
    },
    success: {
      background: "var(--status-success-bg)",
      color: "var(--status-success)"
    },
    warning: {
      background: "var(--status-warning-bg)",
      color: "var(--status-warning)"
    },
    danger: {
      background: "var(--status-danger-bg)",
      color: "var(--status-danger)"
    }
  };
  const t = tones[tone] || tones.pink;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      font: "var(--text-label-sm)",
      letterSpacing: "0.02em",
      ...t
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: "8px 14px",
    font: "var(--text-label-md)",
    radius: "var(--radius-sm)"
  },
  md: {
    padding: "11px 20px",
    font: "var(--text-label-md)",
    radius: "var(--radius-md)"
  },
  lg: {
    padding: "14px 26px",
    font: "var(--text-label-lg)",
    radius: "var(--radius-md)"
  }
};
function variantStyle(variant) {
  switch (variant) {
    case "secondary":
      return {
        background: "var(--action-secondary)",
        color: "var(--text-on-navy)",
        border: "1px solid var(--action-secondary)"
      };
    case "outline":
      return {
        background: "transparent",
        color: "var(--action-primary)",
        border: "1.5px solid var(--action-primary)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--text-heading)",
        border: "1px solid transparent"
      };
    case "accent":
      return {
        background: "var(--action-accent)",
        color: "var(--ple-navy-900)",
        border: "1px solid var(--action-accent)"
      };
    case "primary":
    default:
      return {
        background: "var(--action-primary)",
        color: "var(--text-on-brand)",
        border: "1px solid var(--action-primary)"
      };
  }
}
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button"
}) {
  const sizeStyle = sizes[size] || sizes.md;
  const vStyle = variantStyle(variant);
  const style = {
    fontFamily: "var(--font-body)",
    font: sizeStyle.font,
    padding: sizeStyle.padding,
    borderRadius: sizeStyle.radius,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
    ...vStyle
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: style,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--action-primary-hover)";
      if (variant === "secondary") e.currentTarget.style.background = "var(--action-secondary-hover)";
      if (variant === "accent") e.currentTarget.style.background = "var(--action-accent-hover)";
      if (variant === "outline") e.currentTarget.style.background = "var(--ple-pink-50)";
      if (variant === "ghost") e.currentTarget.style.background = "var(--surface-sunken)";
    },
    onMouseLeave: e => {
      Object.assign(e.currentTarget.style, vStyle);
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "24px",
  hoverable = false
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      padding,
      transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
      transform: hover ? "translateY(-2px)" : "none"
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  size = "md",
  variant = "ghost",
  onClick
}) {
  const px = sizeMap[size] || sizeMap.md;
  const isSolid = variant === "primary";
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": label,
    title: label,
    style: {
      width: px,
      height: px,
      borderRadius: "var(--radius-md)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: isSolid ? "1px solid var(--action-primary)" : "1px solid var(--border-subtle)",
      background: isSolid ? "var(--action-primary)" : "var(--surface-card)",
      color: isSolid ? "var(--text-on-brand)" : "var(--text-heading)",
      cursor: "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: px * 0.45,
      height: px * 0.45
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      font: "var(--text-label-sm)",
      border: "1px solid var(--border-subtle)"
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: "14px",
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(32,28,78,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "28px",
      width: "min(420px, 90vw)",
      fontFamily: "var(--font-body)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-display-sm)",
      color: "var(--text-heading)",
      marginBottom: "12px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      justifyContent: "flex-end",
      marginTop: "22px"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toneColor = {
  info: "var(--ple-navy-800)",
  success: "var(--status-success)",
  danger: "var(--status-danger)"
};
function Toast({
  message,
  tone = "info",
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "var(--ple-navy-900)",
      color: "#fff",
      padding: "14px 18px",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-body)",
      font: "var(--text-body-sm)",
      borderLeft: `4px solid ${toneColor[tone] || toneColor.info}`,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      background: "none",
      border: "none",
      color: "#fff",
      opacity: 0.7,
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--ple-navy-900)",
      color: "#fff",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      font: "var(--text-label-sm)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: "6px",
      border: `1.5px solid ${checked ? "var(--action-primary)" : "var(--border-default)"}`,
      background: checked ? "var(--action-primary)" : "var(--surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard)",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  error,
  disabled = false,
  value,
  onChange
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-md)",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      font: "var(--text-body-md)",
      padding: "11px 14px",
      borderRadius: "var(--radius-md)",
      border: `1.5px solid ${error ? "var(--status-danger)" : focused ? "var(--ple-teal-500)" : "var(--border-subtle)"}`,
      outline: "none",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: focused ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--status-danger)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `1.5px solid ${checked ? "var(--action-primary)" : "var(--border-default)"}`,
      background: "var(--surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--action-primary)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-md)",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      font: "var(--text-body-md)",
      padding: "11px 14px",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--border-subtle)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      color: "var(--text-body)",
      outline: "none"
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt,
    value: opt
  }, opt))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--action-primary)" : "var(--ple-gray-200)",
      position: "relative",
      transition: "background var(--duration-base) var(--ease-standard)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-base) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1.5px solid var(--border-subtle)"
    }
  }, tabs.map(tab => {
    const isActive = tab === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab,
      onClick: () => onChange && onChange(tab),
      style: {
        padding: "10px 18px",
        background: "none",
        border: "none",
        borderBottom: `2.5px solid ${isActive ? "var(--action-primary)" : "transparent"}`,
        color: isActive ? "var(--text-heading)" : "var(--text-muted)",
        font: isActive ? "var(--text-label-md)" : "var(--text-body-md)",
        cursor: "pointer",
        marginBottom: "-1.5px",
        transition: "color var(--duration-fast) var(--ease-standard)"
      }
    }, tab);
  })));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactBar.jsx
try { (() => {
function ContactBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 40,
      padding: "20px 48px",
      background: "var(--ple-pink-50)",
      fontFamily: "var(--font-body)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:01202082023",
    style: {
      font: "var(--text-label-lg)",
      color: "var(--ple-pink-600)",
      textDecoration: "none"
    }
  }, "01202 082023"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:help@portfoliolettingexperts.co.uk",
    style: {
      font: "var(--text-label-lg)",
      color: "var(--text-heading)",
      textDecoration: "none"
    }
  }, "help@portfoliolettingexperts.co.uk"));
}
Object.assign(__ds_scope, { ContactBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ple-navy-900)",
      color: "#fff",
      padding: "48px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "32px",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 15px var(--font-display)",
      marginBottom: 10
    }
  }, "PORTFOLIO LETTING EXPERTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      opacity: 0.75,
      lineHeight: 1.7
    }
  }, "Oxford Point, 19 Oxford Road", /*#__PURE__*/React.createElement("br", null), "Bournemouth, BH8 8GS")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label-md)",
      marginBottom: 10,
      color: "var(--ple-teal-500)"
    }
  }, "01202 082023"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      opacity: 0.85
    }
  }, "help@portfoliolettingexperts.co.uk")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      opacity: 0.75
    }
  }, "Privacy Policy")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function Header({
  active = "home"
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 48px",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-raw.png",
    alt: "PLE",
    style: {
      height: 40,
      width: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 18px var(--font-display)",
      color: "var(--text-heading)",
      letterSpacing: "0.01em"
    }
  }, "PORTFOLIO LETTING EXPERTS")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      font: "var(--text-label-md)",
      color: active === "home" ? "var(--ple-pink-600)" : "var(--text-body)",
      textDecoration: "none"
    }
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: {
      font: "var(--text-label-md)",
      color: active === "about" ? "var(--ple-pink-600)" : "var(--text-body)",
      textDecoration: "none"
    }
  }, "About"), /*#__PURE__*/React.createElement("button", {
    style: {
      font: "var(--text-label-md)",
      padding: "11px 20px",
      borderRadius: "var(--radius-md)",
      background: "var(--action-primary)",
      color: "#fff",
      border: "none",
      cursor: "pointer"
    }
  }, "Book A Call")));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onBookCall
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 460,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-1.jpg",
    alt: "Aerial view of Bournemouth beach",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(32,28,78,0.15) 0%, rgba(32,28,78,0.72) 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--text-display-xl)",
      color: "#fff",
      maxWidth: 780,
      margin: 0,
      textWrap: "balance"
    }
  }, "We help Landlords with 3\u201310 properties in BCP grow their portfolio profitably with zero hassle"), /*#__PURE__*/React.createElement("button", {
    onClick: onBookCall,
    style: {
      marginTop: 28,
      padding: "15px 32px",
      borderRadius: "var(--radius-md)",
      border: "none",
      background: "var(--action-primary)",
      color: "#fff",
      font: "var(--text-label-lg)",
      cursor: "pointer"
    }
  }, "Book A Call")));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandlordNeeds.jsx
try { (() => {
const needs = ["Rental valuations", "Finding new professional tenants", "Switching agents", "Bad tenants — need eviction advice", "Compliance advice"];
function LandlordNeeds() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "88px 48px",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--ple-pink-600)"
    }
  }, "For Bournemouth Landlords"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-display-md)",
      color: "var(--text-heading)",
      margin: "12px 0 0"
    }
  }, "Are you a Landlord that owns rental property in Bournemouth?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-lg)",
      color: "var(--text-muted)",
      marginTop: 16
    }
  }, "We can help today with:")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, needs.map(n => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "var(--ple-teal-100)",
      color: "var(--ple-teal-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      font: "700 14px var(--font-body)"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-lg)",
      color: "var(--text-body)"
    }
  }, n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-display-sm)",
      color: "var(--ple-pink-600)"
    }
  }, "100's of happy customers!")));
}
Object.assign(__ds_scope, { LandlordNeeds });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandlordNeeds.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceTiers.jsx
try { (() => {
const tiers = [{
  name: "Basic",
  price: "50%",
  unit: "of first month rent",
  desc: "Tenant Find Only",
  popular: false
}, {
  name: "Premium",
  price: "8%",
  unit: "of monthly rent",
  desc: "Rent Collection",
  popular: false
}, {
  name: "VIP",
  price: "10%",
  unit: "of monthly rent",
  desc: "Fully Managed",
  popular: true
}];
function ServiceTiers() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "88px 48px",
      background: "var(--surface-sunken)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-display-md)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, "Services"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-muted)",
      fontStyle: "italic",
      marginTop: 8
    }
  }, "All prices + VAT")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: 32,
      border: t.popular ? "2px solid var(--action-primary)" : "1px solid var(--border-subtle)",
      boxShadow: t.popular ? "var(--shadow-lg)" : "var(--shadow-sm)",
      position: "relative"
    }
  }, t.popular && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -14,
      left: 32,
      background: "var(--action-primary)",
      color: "#fff",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      font: "var(--text-label-sm)"
    }
  }, "Popular"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label-lg)",
      color: "var(--text-muted)"
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 44px var(--font-display)",
      color: "var(--text-heading)",
      margin: "8px 0"
    }
  }, t.price), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-muted)",
      marginBottom: 20
    }
  }, t.unit), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label-md)",
      color: "var(--text-heading)",
      marginBottom: 20
    }
  }, t.desc), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      padding: "12px",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      background: t.popular ? "var(--action-primary)" : "transparent",
      color: t.popular ? "#fff" : "var(--action-primary)",
      border: `1.5px solid var(--action-primary)`,
      font: "var(--text-label-md)"
    }
  }, "Learn more"))))));
}
Object.assign(__ds_scope, { ServiceTiers });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceTiers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TeamSection.jsx
try { (() => {
const team = [{
  name: "James Constable",
  role: "Director",
  img: "../../assets/team-1.png"
}, {
  name: "Team Member",
  role: "Lettings Consultant",
  img: "../../assets/team-2.jpg"
}, {
  name: "Team Member",
  role: "Property Manager",
  img: "../../assets/team-3.png"
}];
function TeamSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "88px 48px",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-display-md)",
      color: "var(--text-heading)",
      textAlign: "center",
      marginBottom: 12
    }
  }, "Meet the team"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-md)",
      color: "var(--text-muted)",
      textAlign: "center",
      maxWidth: 620,
      margin: "0 auto 48px"
    }
  }, "Local Bournemouth & Christchurch letting specialists \u2014 here to protect your family's inheritance for years to come."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32
    }
  }, team.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name + m.role,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: m.img,
    alt: m.name,
    style: {
      width: 160,
      height: 160,
      borderRadius: "50%",
      objectFit: "cover",
      margin: "0 auto 16px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label-lg)",
      color: "var(--text-heading)"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--text-muted)"
    }
  }, m.role)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 48,
      background: "var(--ple-navy-900)",
      borderRadius: "var(--radius-xl)",
      padding: "40px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-display-sm)",
      marginBottom: 16
    }
  }, "We're hiring"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:help@portfoliolettingexperts.co.uk?subject=Job%20role",
    style: {
      display: "inline-block",
      padding: "13px 28px",
      borderRadius: "var(--radius-md)",
      background: "var(--ple-teal-500)",
      color: "var(--ple-navy-900)",
      font: "var(--text-label-md)",
      textDecoration: "none"
    }
  }, "Enquire")));
}
Object.assign(__ds_scope, { TeamSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TeamSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ContactBar = __ds_scope.ContactBar;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LandlordNeeds = __ds_scope.LandlordNeeds;

__ds_ns.ServiceTiers = __ds_scope.ServiceTiers;

__ds_ns.TeamSection = __ds_scope.TeamSection;

})();
