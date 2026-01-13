// square
document.querySelectorAll('[class*="square_"]').forEach(el => {
  const squareClass = Array.from(el.classList).find(c => c.startsWith("square_"));
  if (squareClass) {
    const parts = squareClass.split('_');
    const height = Number(parts[1]);
    const width = Number(parts[2]);
    const unit = parts[3] || 'px'; // default to px if not provided
    el.style.height = height + unit;
    el.style.width = width + unit;
    el.style.background = 'blue';
  }
});

// circle
document.querySelectorAll('[class*="circle_"]').forEach(el => {
  const circleClass = Array.from(el.classList).find(c => c.startsWith("circle_"));
  if (circleClass) {
    const parts = circleClass.split('_');
    const height = Number(parts[1]);
    const width = Number(parts[2]);
    const unit = parts[3] || 'px'; // default unit
    const radius = parts[4] ? Number(parts[4]) : null;
    const radiusUnit = parts[5] || unit; // use provided unit or fallback

    el.style.height = height + unit;
    el.style.width = width + unit;
    el.style.background = 'blue';

    // If radius is provided, use it; otherwise default to 50% for a perfect circle
    if (radius !== null && !isNaN(radius)) {
      el.style.borderRadius = radius + radiusUnit;
    } else {
      el.style.borderRadius = '50%';
    }
  }
});

// background color
document.querySelectorAll('[class*="bg_c_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_c_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const color = parts.slice(2).join('_') || 'black'; // allow hyphenated colors like light-blue
    el.style.background = color;
  }
});

// color
document.querySelectorAll('[class*="c_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("c_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const color = parts.slice(1).join('_') || 'black'; // allow hyphenated colors like light-blue
    el.style.color = color;
  }
});

// Opacity
document.querySelectorAll('[class*="o_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("o_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const color = Number(parts.slice(1).join('_')) || 'black'; // allow hyphenated colors like light-blue
    el.style.opacity = color;
  }
});

// font size
document.querySelectorAll('[class*="f_s_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("f_s_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(2).join('_');
    const unit = parts[2] || 10;
    const type = parts[3] || "px";
    el.style.fontSize = unit + type;
  }
});

//font-weight
document.querySelectorAll('[class*="f_w_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("f_w_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(2).join('_');
    const weight = parts[2] || 100;
    el.style.fontWeight = weight;
  }
});

//font-style
document.querySelectorAll('[class*="f_st_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("f_st_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(2).join('_');
    const weight = parts[2] || "unset";
    el.style.fontStyle = weight;
  }
});

//font-family
document.querySelectorAll('[class*="f_f_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("f_f_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(2).join('_');
    const weight = parts[2] || "unset";
    el.style.fontFamily = weight;
  }
});

//text align
document.querySelectorAll('[class*="t_a_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("t_a_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(2).join('_');
    const weight = parts[2] || "left";
    el.style.textAlign = weight;
  }
});

//text Decoration
document.querySelectorAll('[class*="t_d_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("t_d_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(2).join('_');
    const weight = parts[2] || "none";
    el.style.textDecoration = weight;
  }
});

//text transform
document.querySelectorAll('[class*="t_t_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("t_t_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(2).join('_');
    const weight = parts[2] || "uppercase";
    el.style.textTransform = weight;
  }
});

//line height
document.querySelectorAll('[class*="l_h_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("l_h_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(3).join('_');
    const weight = Number(parts[2]) || 1.5;
    const unit = String(parts[3]) || "px";
    el.style.lineHeight= weight + unit;
  }
}); 

//letter Spacing
document.querySelectorAll('[class*="l_s_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("l_s_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(3).join('_');
    const weight = Number(parts[2]) || 1.5;
    const unit = String(parts[3]) || "px";
    el.style.letterSpacing= weight + unit;
  }
});

//word Spacing
document.querySelectorAll('[class*="w_s_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("w_s_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(3).join('_');
    const weight = Number(parts[2]) || 1.5;
    const unit = String(parts[3]) || "px";
    el.style.wordSpacing= weight + unit;
  }
});

//white Spacing
document.querySelectorAll('[class*="wh_s_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("wh_s_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(2).join('_');
    const weight = parts[2] || "unset";
    el.style.whiteSpacing= weight;
  }
});

//Overflow
document.querySelectorAll('[class*="of_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("of_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(1).join('_');
    const weight = parts[1] || "unset";
    el.style.overflow = weight;
  }
});

//Text Overflow
document.querySelectorAll('[class*="t_of_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("t_of_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(1).join('_');
    const weight = parts[1] || "unset";
    el.style.textOverflow = weight;
  }
});

//Max Height
document.querySelectorAll('[class*="m_h_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("m_h_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(1).join('_');
    const weight = Number(parts[1]) || 100;
    const unit = String(parts[2]) || "px";
    el.style.maxHeight = weight + unit;
  }
});

//Max Width
document.querySelectorAll('[class*="m_w_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("m_w_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(1).join('_');
    const weight = Number(parts[1]) || 100;
    const unit = String(parts[2]) || "px";
    el.style.maxWidth = weight + unit;
  }
});

//Min Height
document.querySelectorAll('[class*="mi_h_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("mi_h_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(1).join('_');
    const weight = Number(parts[1]) || 100;
    const unit = String(parts[2]) || "px";
    el.style.minHeight = weight + unit;
  }
});

//Min Width
document.querySelectorAll('[class*="mi_w_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("mi_w_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    parts.slice(1).join('_');
    const weight = Number(parts[1]) || 100;
    const unit = String(parts[2]) || "px";
    el.style.minWidth = weight + unit;
  }
});

// Margin (m_top_10px, m_bottom_20px, m_left_5rem, m_right_15, m_all_10px)
document.querySelectorAll('[class*="m_"]').forEach(el => {
  const marginClass = Array.from(el.classList).find(c => c.startsWith("m_"));
  if (marginClass) {
    const parts = marginClass.split('_');
    const side = parts[1]; // top, bottom, left, right, all, x, y
    const value = parts[2] || 0;
    const unit = parts[3] || "px";

    const cssValue = value + unit;
    switch (side) {
      case "top": el.style.marginTop = cssValue; break;
      case "bottom": el.style.marginBottom = cssValue; break;
      case "left": el.style.marginLeft = cssValue; break;
      case "right": el.style.marginRight = cssValue; break;
      case "x": 
        el.style.marginLeft = cssValue;
        el.style.marginRight = cssValue;
        break;
      case "y": 
        el.style.marginTop = cssValue;
        el.style.marginBottom = cssValue;
        break;
      case "all": el.style.margin = cssValue; break;
    }
  }
});

// Padding (p_top_10px, p_bottom_20px, p_left_5rem, p_right_15, p_all_10px)
document.querySelectorAll('[class*="p_"]').forEach(el => {
  const paddingClass = Array.from(el.classList).find(c => c.startsWith("p_"));
  if (paddingClass) {
    const parts = paddingClass.split('_');
    const side = parts[1]; // top, bottom, left, right, all, x, y
    const value = parts[2] || 0;
    const unit = parts[3] || "px";

    const cssValue = value + unit;
    switch (side) {
      case "top": el.style.paddingTop = cssValue; break;
      case "bottom": el.style.paddingBottom = cssValue; break;
      case "left": el.style.paddingLeft = cssValue; break;
      case "right": el.style.paddingRight = cssValue; break;
      case "x": 
        el.style.paddingLeft = cssValue;
        el.style.paddingRight = cssValue;
        break;
      case "y": 
        el.style.paddingTop = cssValue;
        el.style.paddingBottom = cssValue;
        break;
      case "all": el.style.padding = cssValue; break;
    }
  }
});

// Border (b_2px_solid_red)
document.querySelectorAll('[class*="b_"]').forEach(el => {
  const borderClass = Array.from(el.classList).find(c => c.startsWith("b_"));
  if (borderClass) {
    const parts = borderClass.split('_');
    const width = parts[1] || "1px";
    const style = parts[2] || "solid";
    const color = parts[3] || "black";
    el.style.border = `${width} ${style} ${color}`;
  }
});

// Border-radius (br_10px)
document.querySelectorAll('[class*="br_"]').forEach(el => {
  const brClass = Array.from(el.classList).find(c => c.startsWith("br_"));
  if (brClass) {
    const parts = brClass.split('_');
    const value = parts[1] || "0";
    const unit = parts[2] || "px";
    el.style.borderRadius = value + unit;
  }
});

// Box-shadow (bs_2px_4px_6px_gray)
document.querySelectorAll('[class*="bs_"]').forEach(el => {
  const bsClass = Array.from(el.classList).find(c => c.startsWith("bs_"));
  if (bsClass) {
    const parts = bsClass.split('_');
    const offsetX = parts[1] || "0px";
    const offsetY = parts[2] || "0px";
    const blur = parts[3] || "0px";
    const color = parts[4] || "black";
    el.style.boxShadow = `${offsetX} ${offsetY} ${blur} ${color}`;
  }
});

// Box-sizing (bx_sz_border-box or bx_sz_content-box)
document.querySelectorAll('[class*="bx_sz_"]').forEach(el => {
  const bxClass = Array.from(el.classList).find(c => c.startsWith("bx_sz_"));
  if (bxClass) {
    const parts = bxClass.split('_');
    const value = parts[2] || "border-box";
    el.style.boxSizing = value;
  }
});

// Background Image (bg_img_url('...'))
document.querySelectorAll('[class*="bg_img_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_img_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const url = parts.slice(2).join('_'); // allow underscores in URL
    el.style.backgroundImage = `url(${url})`;
  }
});

// Background Repeat (bg_rep_no-repeat, bg_rep_repeat-x, etc.)
document.querySelectorAll('[class*="bg_rep_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_rep_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const value = parts[2] || "repeat";
    el.style.backgroundRepeat = value;
  }
});

// Background Size (bg_sz_cover, bg_sz_contain, bg_sz_100%_auto)
document.querySelectorAll('[class*="bg_sz_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_sz_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const value = parts.slice(2).join(' ') || "auto";
    el.style.backgroundSize = value;
  }
});

// Background Position (bg_pos_center, bg_pos_top_left, etc.)
document.querySelectorAll('[class*="bg_pos_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_pos_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const value = parts.slice(2).join(' ') || "center";
    el.style.backgroundPosition = value;
  }
});

// Background Attachment (bg_att_fixed, bg_att_scroll)
document.querySelectorAll('[class*="bg_att_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_att_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const value = parts[2] || "scroll";
    el.style.backgroundAttachment = value;
  }
});

// Background Clip (bg_clip_content-box, bg_clip_border-box, bg_clip_text)
document.querySelectorAll('[class*="bg_clip_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_clip_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const value = parts[2] || "border-box";
    el.style.backgroundClip = value;
  }
});

// Background Origin (bg_org_content-box, bg_org_padding-box, bg_org_border-box)
document.querySelectorAll('[class*="bg_org_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_org_"));
  if (bgClass) {
    const parts = bgClass.split('_');
    const value = parts[2] || "padding-box";
    el.style.backgroundOrigin = value;
  }
});

// Background Linear Gradient (bg_lin_grad_to_right_red_blue)
document.querySelectorAll('[class*="bg_lin_grad_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_lin_grad_"));
  if (bgClass) {
    const parts = bgClass.split('_').slice(3); // skip bg_lin_grad
    const gradient = parts.join(', ');
    el.style.backgroundImage = `linear-gradient(${gradient})`;
  }
});

// Background Radial Gradient (bg_rad_grad_circle_red_blue)
document.querySelectorAll('[class*="bg_rad_grad_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_rad_grad_"));
  if (bgClass) {
    const parts = bgClass.split('_').slice(3);
    const gradient = parts.join(', ');
    el.style.backgroundImage = `radial-gradient(${gradient})`;
  }
});

// Background Conic Gradient (bg_con_grad_at_center_red_blue)
document.querySelectorAll('[class*="bg_con_grad_"]').forEach(el => {
  const bgClass = Array.from(el.classList).find(c => c.startsWith("bg_con_grad_"));
  if (bgClass) {
    const parts = bgClass.split('_').slice(3);
    const gradient = parts.join(', ');
    el.style.backgroundImage = `conic-gradient(${gradient})`;
  }
});

// Display (d_block, d_inline, d_flex, d_grid, etc.)
document.querySelectorAll('[class*="d_"]').forEach(el => {
  const dClass = Array.from(el.classList).find(c => c.startsWith("d_"));
  if (dClass) {
    const parts = dClass.split('_');
    const value = parts[1] || "block";
    el.style.display = value;
  }
});

// Position (pos_absolute, pos_relative, pos_fixed, pos_sticky)
document.querySelectorAll('[class*="pos_"]').forEach(el => {
  const posClass = Array.from(el.classList).find(c => c.startsWith("pos_"));
  if (posClass) {
    const parts = posClass.split('_');
    const value = parts[1] || "static";
    el.style.position = value;
  }
});

// Visibility (vis_visible, vis_hidden, vis_collapse)
document.querySelectorAll('[class*="vis_"]').forEach(el => {
  const visClass = Array.from(el.classList).find(c => c.startsWith("vis_"));
  if (visClass) {
    const parts = visClass.split('_');
    const value = parts[1] || "visible";
    el.style.visibility = value;
  }
});

// Float (fl_left, fl_right, fl_none)
document.querySelectorAll('[class*="fl_"]').forEach(el => {
  const flClass = Array.from(el.classList).find(c => c.startsWith("fl_"));
  if (flClass) {
    const parts = flClass.split('_');
    const value = parts[1] || "none";
    el.style.float = value;
  }
});

// Clear (cl_left, cl_right, cl_both, cl_none)
document.querySelectorAll('[class*="cl_"]').forEach(el => {
  const clClass = Array.from(el.classList).find(c => c.startsWith("cl_"));
  if (clClass) {
    const parts = clClass.split('_');
    const value = parts[1] || "none";
    el.style.clear = value;
  }
});

// Z-index (z_10, z_100, etc.)
document.querySelectorAll('[class*="z_"]').forEach(el => {
  const zClass = Array.from(el.classList).find(c => c.startsWith("z_"));
  if (zClass) {
    const parts = zClass.split('_');
    const value = Number(parts[1]) || 0;
    el.style.zIndex = value;
  }
});



// Flex container (flex)
document.querySelectorAll('[class*="flex"]').forEach(el => {
  const flexClass = Array.from(el.classList).find(c => c === "flex");
  if (flexClass) {
    el.style.display = "flex";
  }
});

// Flex Direction (flex_dir_row, flex_dir_column, etc.)
document.querySelectorAll('[class*="flex_dir_"]').forEach(el => {
  const dirClass = Array.from(el.classList).find(c => c.startsWith("flex_dir_"));
  if (dirClass) {
    const parts = dirClass.split('_');
    const value = parts[2] || "row";
    el.style.flexDirection = value;
  }
});

// Justify Content (jc_center, jc_space-between, etc.)
document.querySelectorAll('[class*="jc_"]').forEach(el => {
  const jcClass = Array.from(el.classList).find(c => c.startsWith("jc_"));
  if (jcClass) {
    const parts = jcClass.split('_');
    const value = parts[1] || "flex-start";
    el.style.justifyContent = value;
  }
});

// Gap (gap_20_px)
document.querySelectorAll('[class*="gap_"]').forEach(el => {
  const gapClass = Array.from(el.classList).find(c => c.startsWith("gap_"));
  if (gapClass) {
    const parts = gapClass.split('_');
    const value = parts[1] || "0";
    const unit = parts[2] || "px";
    el.style.gap = value + unit;
  }
});

// Align Items (ai_center, ai_flex-start, ai_stretch)
document.querySelectorAll('[class*="ai_"]').forEach(el => {
  const aiClass = Array.from(el.classList).find(c => c.startsWith("ai_"));
  if (aiClass) {
    const parts = aiClass.split('_');
    const value = parts[1] || "stretch";
    el.style.alignItems = value;
  }
});

// Align Content (ac_center, ac_space-around, etc.)
document.querySelectorAll('[class*="ac_"]').forEach(el => {
  const acClass = Array.from(el.classList).find(c => c.startsWith("ac_"));
  if (acClass) {
    const parts = acClass.split('_');
    const value = parts[1] || "stretch";
    el.style.alignContent = value;
  }
});

// Flex Wrap (fw_wrap, fw_nowrap, fw_wrap-reverse)
document.querySelectorAll('[class*="fw_"]').forEach(el => {
  const fwClass = Array.from(el.classList).find(c => c.startsWith("fw_"));
  if (fwClass) {
    const parts = fwClass.split('_');
    const value = parts[1] || "nowrap";
    el.style.flexWrap = value;
  }
});

// Align Self (as_center, as_flex-end, etc.)
document.querySelectorAll('[class*="as_"]').forEach(el => {
  const asClass = Array.from(el.classList).find(c => c.startsWith("as_"));
  if (asClass) {
    const parts = asClass.split('_');
    const value = parts[1] || "auto";
    el.style.alignSelf = value;
  }
});

// Grid Template Columns (g_tc_1fr_2fr_100px)
document.querySelectorAll('[class*="g_tc_"]').forEach(el => {
  const gClass = Array.from(el.classList).find(c => c.startsWith("g_tc_"));
  if (gClass) {
    const parts = gClass.split('_');
    const value = parts.slice(2).join(' ') || "auto";
    el.style.gridTemplateColumns = value;
  }
});

// Grid Template Rows (g_tr_100px_auto_1fr)
document.querySelectorAll('[class*="g_tr_"]').forEach(el => {
  const gClass = Array.from(el.classList).find(c => c.startsWith("g_tr_"));
  if (gClass) {
    const parts = gClass.split('_');
    const value = parts.slice(2).join(' ') || "auto";
    el.style.gridTemplateRows = value;
  }
});

// Grid Auto Rows (g_ar_100px)
document.querySelectorAll('[class*="g_ar_"]').forEach(el => {
  const gClass = Array.from(el.classList).find(c => c.startsWith("g_ar_"));
  if (gClass) {
    const parts = gClass.split('_');
    const value = parts[2] || "auto";
    el.style.gridAutoRows = value;
  }
});

// Grid Auto Columns (g_ac_200px)
document.querySelectorAll('[class*="g_ac_"]').forEach(el => {
  const gClass = Array.from(el.classList).find(c => c.startsWith("g_ac_"));
  if (gClass) {
    const parts = gClass.split('_');
    const value = parts[2] || "auto";
    el.style.gridAutoColumns = value;
  }
});

// Grid Column (g_col_1_3)
document.querySelectorAll('[class*="g_col_"]').forEach(el => {
  const gClass = Array.from(el.classList).find(c => c.startsWith("g_col_"));
  if (gClass) {
    const parts = gClass.split('_');
    const start = parts[2] || "auto";
    const end = parts[3] || "auto";
    el.style.gridColumn = `${start} / ${end}`;
  }
});

// Grid Row (g_row_2_4)
document.querySelectorAll('[class*="g_row_"]').forEach(el => {
  const gClass = Array.from(el.classList).find(c => c.startsWith("g_row_"));
  if (gClass) {
    const parts = gClass.split('_');
    const start = parts[2] || "auto";
    const end = parts[3] || "auto";
    el.style.gridRow = `${start} / ${end}`;
  }
});

// Justify Items (j_items_center)
document.querySelectorAll('[class*="j_items_"]').forEach(el => {
  const jClass = Array.from(el.classList).find(c => c.startsWith("j_items_"));
  if (jClass) {
    const parts = jClass.split('_');
    const value = parts[2] || "stretch";
    el.style.justifyItems = value;
  }
});

// Place Items (p_items_center)
document.querySelectorAll('[class*="p_items_"]').forEach(el => {
  const pClass = Array.from(el.classList).find(c => c.startsWith("p_items_"));
  if (pClass) {
    const parts = pClass.split('_');
    const value = parts[2] || "center";
    el.style.alignItems = value;
    el.style.justifyItems = value;
  }
});

// Transition (tr_opacity_300ms_ease_0ms)
document.querySelectorAll('[class*="tr_"]').forEach(el => {
  const trClass = Array.from(el.classList).find(c => c.startsWith("tr_"));
  if (trClass) {
    const parts = trClass.split('_');
    const prop = parts[1] || "all";
    const dur = parts[2] || "300ms";
    const timing = parts[3] || "ease";
    const delay = parts[4] || "0ms";
    el.style.transition = `${prop} ${dur} ${timing} ${delay}`;
  }
});

// Animation (anim_td_fade_in_600ms_ease_1)
document.querySelectorAll('[class*="anim_td_"]').forEach(el => {
  const animClass = Array.from(el.classList).find(c => c.startsWith("anim_td_"));
  if (animClass) {
    const parts = animClass.split('_');
    const name = parts[2] || "td_fade_in";
    const dur = parts[3] || "600ms";
    const timing = parts[4] || "ease";
    const count = parts[5] || "1";
    el.style.animationName = name;
    el.style.animationDuration = dur;
    el.style.animationTimingFunction = timing;
    el.style.animationIterationCount = count;
    el.style.animationFillMode = "both";
  }
});

// Transform Translate (tf_t_x_10px_y_20px)
document.querySelectorAll('[class*="tf_t_"]').forEach(el => {
  const tfClass = Array.from(el.classList).find(c => c.startsWith("tf_t_"));
  if (tfClass) {
    const parts = tfClass.split('_');
    const x = parts[3] || "0";
    const y = parts[5] || "0";
    el.style.transform = `translate(${x}, ${y})`;
  }
});

// Transform Rotate (tf_r_45deg)
document.querySelectorAll('[class*="tf_r_"]').forEach(el => {
  const tfClass = Array.from(el.classList).find(c => c.startsWith("tf_r_"));
  if (tfClass) {
    const parts = tfClass.split('_');
    const value = parts[2] || "0deg";
    el.style.transform = `rotate(${value})`;
  }
});

// Transform Scale (tf_s_1_2)
document.querySelectorAll('[class*="tf_s_"]').forEach(el => {
  const tfClass = Array.from(el.classList).find(c => c.startsWith("tf_s_"));
  if (tfClass) {
    const parts = tfClass.split('_');
    const sx = parts[2] || "1";
    const sy = parts[3] || sx;
    el.style.transform = `scale(${sx}, ${sy})`;
  }
});

// Transform Skew (tf_sk_10deg_5deg)
document.querySelectorAll('[class*="tf_sk_"]').forEach(el => {
  const tfClass = Array.from(el.classList).find(c => c.startsWith("tf_sk_"));
  if (tfClass) {
    const parts = tfClass.split('_');
    const ax = parts[2] || "0deg";
    const ay = parts[3] || "0deg";
    el.style.transform = `skew(${ax}, ${ay})`;
  }
});

// Transform Origin (tf_o_center_center)
document.querySelectorAll('[class*="tf_o_"]').forEach(el => {
  const tfClass = Array.from(el.classList).find(c => c.startsWith("tf_o_"));
  if (tfClass) {
    const parts = tfClass.split('_');
    const x = parts[2] || "center";
    const y = parts[3] || "center";
    el.style.transformOrigin = `${x} ${y}`;
  }
});

// Filter (flt_blur_4px, flt_brightness_120%, etc.)
document.querySelectorAll('[class*="flt_"]').forEach(el => {
  const fltClass = Array.from(el.classList).find(c => c.startsWith("flt_"));
  if (fltClass) {
    const parts = fltClass.split('_');
    const type = parts[1];
    const value = parts[2];
    const map = {
      blur: v => `blur(${v})`,
      brightness: v => `brightness(${v})`,
      contrast: v => `contrast(${v})`,
      grayscale: v => `grayscale(${v})`,
      hue: v => `hue-rotate(${v})`,
      invert: v => `invert(${v})`,
      opacity: v => `opacity(${v})`,
      saturate: v => `saturate(${v})`,
      sepia: v => `sepia(${v})`
    };
    if (map[type]) el.style.filter = map[type](value);
  }
});

// Utility parser function
function applyUtility(el, prefix, handler) {
  const cls = Array.from(el.classList).find(c => c.startsWith(prefix));
  if (cls) {
    const parts = cls.split('_');
    handler(el, parts);
  }
}

// ---------- Grid ----------
document.querySelectorAll('[class*="g_row_"]').forEach(el => {
  applyUtility(el, "g_row_", (el, parts) => {
    const start = parts[2] || "auto";
    const end = parts[3] || "auto";
    el.style.gridRow = `${start} / ${end}`;
  });
});

document.querySelectorAll('[class*="g_col_"]').forEach(el => {
  applyUtility(el, "g_col_", (el, parts) => {
    const start = parts[2] || "auto";
    const end = parts[3] || "auto";
    el.style.gridColumn = `${start} / ${end}`;
  });
});

// ---------- Transition ----------
document.querySelectorAll('[class*="tr_"]').forEach(el => {
  applyUtility(el, "tr_", (el, parts) => {
    const prop = parts[1] || "all";
    const dur = parts[2] || "300ms";
    const timing = parts[3] || "ease";
    const delay = parts[4] || "0ms";
    el.style.transition = `${prop} ${dur} ${timing} ${delay}`;
  });
});

// ---------- Animation ----------
document.querySelectorAll('[class*="anim_"]').forEach(el => {
  applyUtility(el, "anim_", (el, parts) => {
    const name = parts[1] || "fade_in";
    const dur = parts[2] || "600ms";
    const timing = parts[3] || "ease";
    const count = parts[4] || "1";
    el.style.animationName = name;
    el.style.animationDuration = dur;
    el.style.animationTimingFunction = timing;
    el.style.animationIterationCount = count;
    el.style.animationFillMode = "both";
  });
});

// ---------- Pseudo-classes (customisable) ----------
document.querySelectorAll('[class*="hov_"]').forEach(el => {
  applyUtility(el, "hov_", (el, parts) => {
    const prop = parts[1];       // e.g. bg_c, opacity, color
    const value = parts.slice(2).join('_'); // custom value
    el.addEventListener("mouseenter", () => {
      if (prop === "bg") el.style.background = value;
      else if (prop === "c") el.style.color = value;
      else if (prop === "opacity") el.style.opacity = value;
      // extend with more props
    });
    el.addEventListener("mouseleave", () => {
      if (prop === "bg") el.style.background = "";
      else if (prop === "c") el.style.color = "";
      else if (prop === "opacity") el.style.opacity = "";
    });
  });
});

// ---------- CSS Variables ----------
document.querySelectorAll('[class*="use_var_"]').forEach(el => {
  applyUtility(el, "use_var_", (el, parts) => {
    const prop = parts[2]; // bg, color, radius
    if (prop === "bg") el.style.background = "var(--name)";
    if (prop === "color") el.style.color = "var(--primary)";
    if (prop === "radius") el.style.borderRadius = "var(--radius)";
  });
});

// ---------- Responsive ----------
function applyResponsive() {
  const w = window.innerWidth;
  document.querySelectorAll('.sm_hidden').forEach(el => {
    if (w <= 640) el.style.display = "none";
  });
  document.querySelectorAll('.md_block').forEach(el => {
    if (w > 640 && w <= 1024) el.style.display = "block";
  });
  document.querySelectorAll('.lg_block').forEach(el => {
    if (w > 1024) el.style.display = "block";
  });
}
window.addEventListener("resize", applyResponsive);
applyResponsive();

// ---------- Shapes ----------
// Circle (shape_circle_100_px_blue)
document.querySelectorAll('[class*="shape_circle_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_circle_"));
  if (sClass) {
    const parts = sClass.split('_');
    const size = parts[2] || "100";
    const unit = parts[3] || "px";
    const color = parts[4] || "blue";
    el.style.width = size + unit;
    el.style.height = size + unit;
    el.style.borderRadius = "50%";
    el.style.background = color;
  }
});

// Square (shape_square_100_px_green)
document.querySelectorAll('[class*="shape_square_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_square_"));
  if (sClass) {
    const parts = sClass.split('_');
    const size = parts[2] || "100";
    const unit = parts[3] || "px";
    const color = parts[4] || "green";
    el.style.width = size + unit;
    el.style.height = size + unit;
    el.style.background = color;
  }
});

// Rectangle (shape_rectangle_160_80_px_yellow)
document.querySelectorAll('[class*="shape_rectangle_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_rectangle_"));
  if (sClass) {
    const parts = sClass.split('_');
    const w = parts[2] || "160";
    const h = parts[3] || "80";
    const unit = parts[4] || "px";
    const color = parts[5] || "yellow";
    el.style.width = w + unit;
    el.style.height = h + unit;
    el.style.background = color;
  }
});

// Diamond (shape_diamond_80_px_orange)
document.querySelectorAll('[class*="shape_diamond_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_diamond_"));
  if (sClass) {
    const parts = sClass.split('_');
    const size = parts[2] || "80";
    const unit = parts[3] || "px";
    const color = parts[4] || "orange";
    el.style.width = size + unit;
    el.style.height = size + unit;
    el.style.background = color;
    el.style.transform = "rotate(45deg)";
  }
});

// Cross (shape_cross_100_20_px_red)
document.querySelectorAll('[class*="shape_cross_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_cross_"));
  if (sClass) {
    const parts = sClass.split('_');
    const w = parts[2] || "100";
    const h = parts[3] || "20";
    const unit = parts[4] || "px";
    const color = parts[5] || "red";
    el.style.width = w + unit;
    el.style.height = h + unit;
    el.style.background = color;
    el.style.position = "relative";
  }
});

// Star (shape_star_100_px_purple)
document.querySelectorAll('[class*="shape_star_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_star_"));
  if (sClass) {
    const parts = sClass.split('_');
    const size = parts[2] || "100";
    const unit = parts[3] || "px";
    const color = parts[4] || "purple";
    el.style.width = size + unit;
    el.style.height = size + unit;
    el.style.background = color;
    el.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
  }
});

// Triangle Up (shape_triangle_up_100_px_blue)
document.querySelectorAll('[class*="shape_triangle_up_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_triangle_up_"));
  if (sClass) {
    const parts = sClass.split('_');
    const size = parts[3] || "100";
    const unit = parts[4] || "px";
    const color = parts[5] || "blue";
    el.style.width = "0";
    el.style.height = "0";
    el.style.borderLeft = (size/2) + unit + " solid transparent";
    el.style.borderRight = (size/2) + unit + " solid transparent";
    el.style.borderBottom = size + unit + " solid " + color;
  }
});

// Triangle Right (shape_triangle_right_100_px_orange)
document.querySelectorAll('[class*="shape_triangle_right_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_triangle_right_"));
  if (sClass) {
    const parts = sClass.split('_');
    const size = parts[3] || "100";
    const unit = parts[4] || "px";
    const color = parts[5] || "orange";
    el.style.width = "0";
    el.style.height = "0";
    el.style.borderTop = (size/2) + unit + " solid transparent";
    el.style.borderBottom = (size/2) + unit + " solid transparent";
    el.style.borderLeft = size + unit + " solid " + color;
  }
});

// Ellipse (shape_ellipse_140_80_px_green)
document.querySelectorAll('[class*="shape_ellipse_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_ellipse_"));
  if (sClass) {
    const parts = sClass.split('_');
    const w = parts[2] || "140";
    const h = parts[3] || "80";
    const unit = parts[4] || "px";
    const color = parts[5] || "green";
    el.style.width = w + unit;
    el.style.height = h + unit;
    el.style.borderRadius = "50%";
    el.style.background = color;
  }
});

// Pentagon (shape_pentagon_100_px_pink)
document.querySelectorAll('[class*="shape_pentagon_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_pentagon_"));
  if (sClass) {
    const parts = sClass.split('_');
    const size = parts[2] || "100";
    const unit = parts[3] || "px";
    const color = parts[4] || "pink";
    el.style.width = size + unit;
    el.style.height = size + unit;
    el.style.background = color;
    el.style.clipPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
  }
});

// Hexagon (shape_hexagon_100_px_cyan)
document.querySelectorAll('[class*="shape_hexagon_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_hexagon_"));
  if (sClass) {
    const parts = sClass.split('_');
    const size = parts[2] || "100";
    const unit = parts[3] || "px";
    const color = parts[4] || "cyan";
    el.style.width = size + unit;
    el.style.height = size + unit;
    el.style.background = color;
    el.style.clipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
  }
});

// Parallelogram (shape_parallelogram_120_60_px_pink)
document.querySelectorAll('[class*="shape_parallelogram_"]').forEach(el => {
  const sClass = Array.from(el.classList).find(c => c.startsWith("shape_parallelogram_"));
  if (sClass) {
    const parts = sClass.split('_');
    const w = parts[2] || "120";
    const h = parts[3] || "60";
    const unit = parts[4] || "px";
    const color = parts[5] || "pink";
    el.style.width = w + unit;
    el.style.height = h + unit;
    el.style.background = color;
    el.style.transform = "skew(20deg)";
  }
});
