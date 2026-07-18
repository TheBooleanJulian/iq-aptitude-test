/**
 * IQ Aptitude Practice — Interactive Quiz
 * ─────────────────────────────────────────
 * Questions are loaded from  ./iq_questions_db.js
 * This file contains only rendering, state, and export logic.
 */
import { useState } from "react";
import { QUESTION_BANK } from "./iq_questions_db.js";

const CATS    = ["Pictorial","Number","Verbal","Logic"];
const PER_CAT = 5;

function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; }
const MODES = [
  {id:"easy",       label:"Easy",        emoji:"🌱", desc:"Questions from the Easy pool only",                diff:["Easy"],                                          color:"#1D9E75"},
  {id:"medium",     label:"Medium",      emoji:"📘", desc:"Questions from the Medium pool only",              diff:["Medium"],                                        color:"#378ADD"},
  {id:"hard",       label:"Hard",        emoji:"🔥", desc:"Questions from the Hard pool only",                diff:["Hard"],                                          color:"#E24B4A"},
  {id:"very_hard",  label:"Very Hard",   emoji:"💀", desc:"Questions from the Very Hard pool only",           diff:["Very Hard"],                                     color:"#7B2FF7"},
  {id:"impossible", label:"Impossible",  emoji:"☠️",  desc:"Only the elite 1% can solve these — proceed with caution", diff:["Impossible"],                          color:"#0d0d0d", dark:true},
  {id:"random",     label:"Random Mix",  emoji:"🎲", desc:"Random selection from all difficulty levels",      diff:["Easy","Medium","Hard","Very Hard","Impossible"],  color:"#BA7517"},
];

function selectQuestions(mode="random", cats=CATS){
  const modeInfo = MODES.find(m=>m.id===mode) || MODES[MODES.length-1];
  const activeCats = cats.length > 0 ? cats : CATS;
  const totalQ = 20;
  const perCat = Math.floor(totalQ / activeCats.length);
  const remainder = totalQ - perCat * activeCats.length;
  // give extra questions to first categories if doesn't divide evenly
  return activeCats.flatMap((cat, i) => {
    const n = perCat + (i < remainder ? 1 : 0);
    const pool = QUESTION_BANK[cat].filter(q=>modeInfo.diff.includes(q.diff));
    return shuffle(pool).slice(0, n);
  });
}

const T  = "#1D9E75";

const TD = "rgba(29,158,117,0.12)";
const E  = "#E24B4A";
const ED = "rgba(226,75,74,0.1)";
const CC = { Pictorial:"#1D9E75", Number:"#378ADD", Verbal:"#D4537E", Logic:"#BA7517" };
const LB = ["A","B","C","D"];

/* ══════════════════════════════════════════════════
   STRING SVG HELPERS  (used only for HTML download)
   ══════════════════════════════════════════════════ */
function _arrow(a=0){
  return `<g transform="rotate(${a},25,25)"><line x1="25" y1="39" x2="25" y2="14" stroke="#222" stroke-width="3.5" stroke-linecap="round"/><polyline points="17,22 25,12 33,22" fill="none" stroke="#222" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>`;
}
function _dots(n){
  const c=25, L=[[[c,c]],[[c-8,c],[c+8,c]],[[c-8,c-7],[c+8,c-7],[c,c+8]],[[c-8,c-8],[c+8,c-8],[c-8,c+8],[c+8,c+8]],[[c-8,c-8],[c+8,c-8],[c,c],[c-8,c+8],[c+8,c+8]],[[c-9,c-9],[c,c-9],[c+9,c-9],[c-9,c+9],[c,c+9],[c+9,c+9]],[[c-9,c-11],[c,c-11],[c+9,c-11],[c-9,c],[c+9,c],[c-9,c+11],[c+9,c+11]],[[c-9,c-11],[c,c-11],[c+9,c-11],[c-9,c],[c+9,c],[c-9,c+11],[c,c+11],[c+9,c+11]],[[c-9,c-11],[c,c-11],[c+9,c-11],[c-9,c],[c,c],[c+9,c],[c-9,c+11],[c,c+11],[c+9,c+11]]];
  return (L[Math.min(n-1,8)]||[[c,c]]).map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="4" fill="#222"/>`).join('');
}
function _multi(s,t,n){
  const r=5.5, P={1:[[25,25]],2:[[14,25],[36,25]],3:[[9,25],[25,25],[41,25]]}, f=t==='filled'?'#222':'none';
  return (P[n]||[[25,25]]).map(([cx,cy])=>{
    if(s==='circle') return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}" stroke="#222" stroke-width="1.8"/>`;
    if(s==='square') return `<rect x="${cx-r}" y="${cy-r}" width="${r*2}" height="${r*2}" fill="${f}" stroke="#222" stroke-width="1.8"/>`;
    return `<polygon points="${cx},${cy-r} ${cx+r*.866},${cy+r*.5} ${cx-r*.866},${cy+r*.5}" fill="${f}" stroke="#222" stroke-width="1.8"/>`;
  }).join('');
}
// _shapeCore renders only the base shape (no pos/inner)
function _shapeCore(cell){
  if(cell.d!==undefined)  return _dots(cell.d);
  if(cell.ar!==undefined) return _arrow(cell.ar);
  if(cell.n!==undefined)  return _multi(cell.s,cell.t,cell.n);
  const r=cell.sz==='lg'?17:cell.sz==='sm'?7:12;
  const f=cell.t==='filled'?'#222':cell.t==='semi'?'#222':'none', fo=cell.t==='semi'?.35:1, sw=2;
  if(cell.s==='circle')  return `<circle cx="25" cy="25" r="${r}" fill="${f}" fill-opacity="${fo}" stroke="#222" stroke-width="${sw}"/>`;
  if(cell.s==='square')  return `<rect x="${25-r}" y="${25-r}" width="${r*2}" height="${r*2}" fill="${f}" fill-opacity="${fo}" stroke="#222" stroke-width="${sw}"/>`;
  if(cell.s==='triangle'){const p=`25,${25-r} ${25+r*.866},${25+r*.5} ${25-r*.866},${25+r*.5}`;return `<polygon points="${p}" fill="${f}" fill-opacity="${fo}" stroke="#222" stroke-width="${sw}"/>`;}
  if(cell.s==='diamond') {const p=`25,${25-r} ${25+r},25 25,${25+r} ${25-r},25`;return `<polygon points="${p}" fill="${f}" fill-opacity="${fo}" stroke="#222" stroke-width="${sw}"/>`;}
  if(cell.s==='hexagon') {const pts=Array.from({length:6},(_,i)=>{const a=i*Math.PI/3;return `${25+r*Math.cos(a)},${25+r*Math.sin(a)}`;}).join(' ');return `<polygon points="${pts}" fill="${f}" fill-opacity="${fo}" stroke="#222" stroke-width="${sw}"/>`;}
  return '';
}
const _POS_T = {
  tl:'scale(0.5)',
  tr:'translate(25,0) scale(0.5)',
  bl:'translate(0,25) scale(0.5)',
  br:'translate(25,25) scale(0.5)',
};
function _shape(cell){
  if(!cell) return `<text x="25" y="31" text-anchor="middle" fill="#aaa" font-size="20" font-weight="600" font-family="sans-serif">?</text>`;
  // extra: two shapes at independent corner positions
  if(cell.extra){
    const a = cell.pos && cell.pos!=='c'
      ? `<g transform="${_POS_T[cell.pos]}">${_shapeCore(cell)}</g>`
      : _shapeCore(cell);
    const b = cell.extra.pos && cell.extra.pos!=='c'
      ? `<g transform="${_POS_T[cell.extra.pos]}">${_shapeCore(cell.extra)}</g>`
      : _shapeCore(cell.extra);
    return a+b;
  }
  if(cell.inner){
    return _shapeCore(cell)+`<g transform="translate(12.5,12.5) scale(0.5)">${_shape(cell.inner)}</g>`;
  }
  if(cell.pos && cell.pos!=='c'){
    return `<g transform="${_POS_T[cell.pos]}">${_shapeCore(cell)}</g>`;
  }
  return _shapeCore(cell);
}
function _cell(cell,size=58,dashed=false){
  const bd=dashed?`stroke="#aaa" stroke-dasharray="4,3"`:`stroke="#ccc"`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" style="display:block"><rect x="1" y="1" width="48" height="48" rx="5" fill="${dashed?'#f6f6f6':'#fff'}" ${bd} stroke-width="1.2"/>${_shape(cell)}</svg>`;
}

/* ══════════════════════════════════════════════════
   HTML DOWNLOAD  (full worksheet as standalone file)
   ══════════════════════════════════════════════════ */
function buildHTML(questions, includeKey){
  const qHTML = questions.map((q,i)=>{
    const isPO = ['matrix','series','odd_one_out'].includes(q.type);
    const cc   = CC[q.cat];
    let visual = '';

    if(q.type==='matrix'){
      const rows=q.grid.map(row=>`<tr>${row.map(c=>`<td style="padding:2px">${_cell(c,58,c===null)}</td>`).join('')}</tr>`);
      visual=`<table style="border-collapse:collapse;margin:8px 0">${rows.join('')}</table>`;
    } else if(q.type==='series'){
      const parts=q.series.map(c=>_cell(c,52)).join(`<span style="color:#bbb;font-size:14px;margin:0 3px;line-height:52px">→</span>`);
      visual=`<div style="display:flex;align-items:center;flex-wrap:wrap;gap:2px;margin:8px 0">${parts}<span style="color:#bbb;font-size:14px;margin:0 3px;line-height:52px">→</span>${_cell(null,52,true)}</div>`;
    } else if(q.type==='odd_one_out'){
      visual=`<p style="margin:4px 0 8px;font-size:12px;color:#888;font-style:italic">Select the shape that does not share a property with the others.</p>`;
    } else if(q.type==='sequence'){
      const nums=q.sequence.map(n=>`<span style="display:inline-flex;align-items:center;justify-content:center;min-width:36px;height:36px;border:1px solid #ccc;border-radius:5px;font-size:15px;font-weight:500;padding:0 5px">${n}</span><span style="color:#ccc;font-size:12px;margin:0 3px">→</span>`).join('');
      visual=`<div style="display:flex;align-items:center;flex-wrap:wrap;gap:2px;margin:8px 0">${nums}<span style="display:inline-flex;align-items:center;justify-content:center;min-width:36px;height:36px;border:1.5px dashed #aaa;border-radius:5px;font-size:15px;font-weight:600;color:#aaa;padding:0 5px">?</span></div>`;
    } else if(q.type==='analogy'){
      visual=`<div style="margin:8px 0;padding:12px 16px;background:#f5f5f5;border-radius:7px;text-align:center;font-size:17px;font-weight:500;letter-spacing:.02em">${q.prompt}</div>`;
    } else if(q.type==='logic'){
      const prems=q.premises.map((p,pi)=>`<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:5px"><span style="font-size:10px;border:1px solid #ccc;border-radius:4px;padding:1px 5px;white-space:nowrap;color:#777;margin-top:2px">Premise ${pi+1}</span><span style="font-size:13px">${p}</span></div>`).join('');
      visual=`<div style="margin:8px 0;padding:10px 12px;background:#f5f5f5;border-radius:7px">${prems}</div>`;
    }

    const opts=q.options.map((opt,oi)=>{
      const circle=`<span style="width:20px;height:20px;border-radius:50%;border:1.5px solid #333;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0">${LB[oi]}</span>`;
      if(isPO) return `<div style="display:inline-flex;align-items:center;gap:5px;margin-right:6px;margin-bottom:4px">${circle}${_cell(opt,46)}</div>`;
      const val=typeof opt==='number'||typeof opt==='string'?opt:'?';
      return `<div style="display:inline-flex;align-items:center;gap:7px;margin-right:16px;margin-bottom:4px">${circle}<span style="font-size:13px">${val}</span></div>`;
    }).join('');

    return `<div style="border:1px solid #ddd;border-radius:8px;padding:12px 14px;margin-bottom:10px;page-break-inside:avoid;break-inside:avoid;background:#fff">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:7px">
    <span style="font-size:14px;font-weight:700">Q${i+1}.</span>
    <span style="font-size:10px;padding:2px 7px;border-radius:10px;border:1px solid ${cc};color:${cc};font-weight:600">${q.cat}</span>
    <span style="font-size:10px;color:#bbb">${q.diff}</span>
  </div>
  <p style="font-size:13px;margin:0 0 6px;line-height:1.5">${q.title}</p>
  ${visual}
  <div style="margin-top:8px;display:flex;flex-wrap:wrap;align-items:center">${opts}</div>
</div>`;
  }).join('\n');

  const keyHTML = includeKey ? `
<div style="page-break-before:always;padding-top:20px">
  <div style="border-bottom:3px solid #111;padding-bottom:10px;margin-bottom:16px">
    <div style="font-size:18px;font-weight:700">Answer Key</div>
    <div style="font-size:11px;color:#888;margin-top:3px">For educator / self-marking use only</div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px 10px;margin-bottom:18px">
    ${questions.map((q,i)=>`<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid #e5e5e5;border-radius:6px">
      <span style="font-size:11px;color:#888;white-space:nowrap">Q${i+1}</span>
      <span style="font-size:15px;font-weight:700;color:#1D9E75">${LB[q.ans]}</span>
      <span style="font-size:9px;color:#bbb">${q.cat}</span>
    </div>`).join('')}
  </div>
  <div style="border-top:1px solid #eee;padding-top:12px">
    <div style="font-size:12px;font-weight:700;margin-bottom:8px;color:#333">Explanations</div>
    ${questions.map((q,i)=>`<div style="display:flex;gap:10px;margin-bottom:6px;font-size:12px;line-height:1.5;page-break-inside:avoid;break-inside:avoid">
      <span style="font-weight:700;color:#333;white-space:nowrap;min-width:22px">Q${i+1}</span>
      <span style="color:#1D9E75;font-weight:700;min-width:14px">${LB[q.ans]}</span>
      <span style="color:#555">${q.exp}</span>
    </div>`).join('')}
  </div>
  <p style="margin-top:18px;font-size:10px;color:#bbb;border-top:1px solid #f0f0f0;padding-top:8px">
    Practice estimate only — IQ range figures are approximate and not a certified psychometric assessment.
  </p>
</div>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>IQ Aptitude Practice Worksheet</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:sans-serif;color:#111;background:#fff;padding:24px;max-width:720px;margin:0 auto}
#toolbar{background:#fffbea;border:1px solid #e8d840;border-radius:8px;padding:12px 16px;margin-bottom:20px;display:flex;align-items:center;gap:12px;font-size:13px}
#toolbar button{background:#1D9E75;color:#fff;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600}
@media print{#toolbar{display:none!important}@page{margin:15mm 12mm}body{padding:0}}
</style>
</head>
<body>
<div id="toolbar">
  <span>✅ File opened — click Print to get a hardcopy or save as PDF.</span>
  <button onclick="window.print()">🖨 Print / Save as PDF</button>
</div>
<div style="border-bottom:3px solid #111;padding-bottom:12px;margin-bottom:18px">
  <div style="font-size:22px;font-weight:700;letter-spacing:-.02em;margin-bottom:6px">IQ Aptitude Practice Worksheet</div>
  <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:12px;color:#555">
    <span>20 Questions &nbsp;·&nbsp; Pictorial · Number · Verbal · Logic</span>
    <span>Name: ___________________________ &nbsp; Date: ______________</span>
  </div>
  <div style="margin-top:8px;font-size:11px;color:#888;font-style:italic">Instructions: Circle the letter of the best answer for each question.</div>
</div>
${qHTML}
${keyHTML}
</body>
</html>`;
}

function downloadWorksheet(questions, includeKey){
  const html = buildHTML(questions, includeKey);
  const blob = new Blob([html],{type:'text/html;charset=utf-8'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = includeKey ? 'iq-worksheet-with-key.html' : 'iq-worksheet.html';
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{ document.body.removeChild(a); URL.revokeObjectURL(url); }, 1000);
}

/* ══════════════════════════════════════════════════
   REACT SVG COMPONENTS  (interactive quiz rendering)
   ══════════════════════════════════════════════════ */
function Arrow({a=0, ink=T}){
  return <g transform={`rotate(${a},25,25)`}>
    <line x1="25" y1="39" x2="25" y2="14" stroke={ink} strokeWidth="3.5" strokeLinecap="round"/>
    <polyline points="17,22 25,12 33,22" fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>;
}
function Dots({n, ink=T}){
  const c=25, L=[[[c,c]],[[c-8,c],[c+8,c]],[[c-8,c-7],[c+8,c-7],[c,c+8]],[[c-8,c-8],[c+8,c-8],[c-8,c+8],[c+8,c+8]],[[c-8,c-8],[c+8,c-8],[c,c],[c-8,c+8],[c+8,c+8]],[[c-9,c-9],[c,c-9],[c+9,c-9],[c-9,c+9],[c,c+9],[c+9,c+9]],[[c-9,c-11],[c,c-11],[c+9,c-11],[c-9,c],[c+9,c],[c-9,c+11],[c+9,c+11]],[[c-9,c-11],[c,c-11],[c+9,c-11],[c-9,c],[c+9,c],[c-9,c+11],[c,c+11],[c+9,c+11]],[[c-9,c-11],[c,c-11],[c+9,c-11],[c-9,c],[c,c],[c+9,c],[c-9,c+11],[c,c+11],[c+9,c+11]]];
  return (L[Math.min(n-1,8)]||[[c,c]]).map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="4" fill={ink}/>);
}
function Multi({s, t, n, ink=T}){
  const r=5.5, P={1:[[25,25]],2:[[14,25],[36,25]],3:[[9,25],[25,25],[41,25]]}, f=t==='filled'?ink:'none';
  return (P[n]||[[25,25]]).map(([cx,cy],i)=>{
    if(s==='circle') return <circle key={i} cx={cx} cy={cy} r={r} fill={f} stroke={ink} strokeWidth="1.8"/>;
    if(s==='square') return <rect key={i} x={cx-r} y={cy-r} width={r*2} height={r*2} fill={f} stroke={ink} strokeWidth="1.8"/>;
    const p=`${cx},${cy-r} ${cx+r*.866},${cy+r*.5} ${cx-r*.866},${cy+r*.5}`;
    return <polygon key={i} points={p} fill={f} stroke={ink} strokeWidth="1.8"/>;
  });
}
// ShapeCore renders the base shape only (no pos/inner handling)
function ShapeCore({cell, ink=T}){
  if(cell.d!==undefined)  return <Dots n={cell.d} ink={ink}/>;
  if(cell.ar!==undefined) return <Arrow a={cell.ar} ink={ink}/>;
  if(cell.n!==undefined)  return <Multi s={cell.s} t={cell.t} n={cell.n} ink={ink}/>;
  const r=cell.sz==='lg'?17:cell.sz==='sm'?7:12;
  const f=cell.t==='filled'?ink:cell.t==='semi'?ink:'none', fo=cell.t==='semi'?.35:1, sw=2.2;
  if(cell.s==='circle')   return <circle cx="25" cy="25" r={r} fill={f} fillOpacity={fo} stroke={ink} strokeWidth={sw}/>;
  if(cell.s==='square')   return <rect x={25-r} y={25-r} width={r*2} height={r*2} fill={f} fillOpacity={fo} stroke={ink} strokeWidth={sw}/>;
  if(cell.s==='triangle'){const p=`25,${25-r} ${25+r*.866},${25+r*.5} ${25-r*.866},${25+r*.5}`;return <polygon points={p} fill={f} fillOpacity={fo} stroke={ink} strokeWidth={sw}/>;}
  if(cell.s==='diamond') {const p=`25,${25-r} ${25+r},25 25,${25+r} ${25-r},25`;return <polygon points={p} fill={f} fillOpacity={fo} stroke={ink} strokeWidth={sw}/>;}
  if(cell.s==='hexagon') {const pts=Array.from({length:6},(_,i)=>{const a=i*Math.PI/3;return `${25+r*Math.cos(a)},${25+r*Math.sin(a)}`;}).join(' ');return <polygon points={pts} fill={f} fillOpacity={fo} stroke={ink} strokeWidth={sw}/>;}
  return null;
}
// POS corner transforms: each maps the 50×50 viewport into one quadrant at 50% scale
const POS_T = {
  tl:"scale(0.5)",
  tr:"translate(25,0) scale(0.5)",
  bl:"translate(0,25) scale(0.5)",
  br:"translate(25,25) scale(0.5)",
};
const POS_NAME = {tl:"top-left", tr:"top-right", bl:"bottom-left", br:"bottom-right", c:"centre"};
/**
 * ShapeEl — full renderer.
 *   pos   : places shape in a corner quadrant at 50% scale
 *   inner : renders a smaller shape centred inside the outer shape at 50% scale
 */
function ShapeEl({cell, ink=T}){
  if(!cell) return <text x="25" y="31" textAnchor="middle" fill="#aaa" fontSize="20" fontWeight="600">?</text>;
  // extra: two shapes at independent corner positions (no inner allowed with extra)
  if(cell.extra){
    const a = cell.pos && cell.pos!=='c'
      ? <g transform={POS_T[cell.pos]}><ShapeCore cell={cell} ink={ink}/></g>
      : <ShapeCore cell={cell} ink={ink}/>;
    const b = cell.extra.pos && cell.extra.pos!=='c'
      ? <g transform={POS_T[cell.extra.pos]}><ShapeCore cell={cell.extra} ink={ink}/></g>
      : <ShapeCore cell={cell.extra} ink={ink}/>;
    return <>{a}{b}</>;
  }
  // inner: draw outer shape first, then overlay inner shape scaled to 50% centred
  if(cell.inner){
    return <>
      <ShapeCore cell={cell} ink={ink}/>
      <g transform="translate(12.5,12.5) scale(0.5)">
        <ShapeEl cell={cell.inner} ink={ink}/>
      </g>
    </>;
  }
  // pos: render shape in one corner quadrant at 50% scale
  if(cell.pos && cell.pos !== 'c'){
    return <g transform={POS_T[cell.pos]}><ShapeCore cell={cell} ink={ink}/></g>;
  }
  return <ShapeCore cell={cell} ink={ink}/>;
}
function Cell({cell, dashed=false, size=68, ink=T}){
  if(cell && cell.g) return <GCell cell={cell} size={size}/>;
  if(cell===null) return(
    <div style={{width:size,height:size,background:"rgba(0,0,0,0.03)",border:"1.5px dashed #aaa",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
      <span style={{fontSize:18,color:"#aaa"}}>?</span>
    </div>
  );
  return <div style={{width:size,height:size,background:dashed?'rgba(0,0,0,0.03)':'white',border:dashed?'1.5px dashed #aaa':'1px solid #d8d8d8',borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
    <svg width="50" height="50" viewBox="0 0 50 50"><ShapeEl cell={cell} ink={ink}/></svg>
  </div>;
}
function Tiny({cell}){
  if(cell && cell.g) return <GCell cell={cell} size={24}/>;
  return <div style={{width:24,height:24,background:"#f4f4f4",border:"1px solid #ddd",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
    <svg width="18" height="18" viewBox="0 0 50 50"><ShapeEl cell={cell}/></svg>
  </div>;
}
/* ── Grid Cell renderer (for pictorial questions using g/items format) ── */
function GCell({cell, size=68}){
  if(!cell) return(
    <div style={{width:size,height:size,background:"rgba(0,0,0,0.03)",border:"1.5px dashed #aaa",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
      <span style={{fontSize:size*0.28,color:"#aaa"}}>?</span>
    </div>
  );
  const n = cell.g==="3x3" ? 3 : 2;
  const cs = 50/n;
  const lines = [];
  for(let i=1;i<n;i++){
    lines.push(<line key={"v"+i} x1={i*cs} y1={0} x2={i*cs} y2={50} stroke="#555" strokeWidth={0.7}/>);
    lines.push(<line key={"h"+i} x1={0} y1={i*cs} x2={50} y2={i*cs} stroke="#555" strokeWidth={0.7}/>);
  }
  const items = cell.items||[];
  const ri = (item,idx) => {
    const cx=item.c*cs+cs/2, cy=item.r*cs+cs/2, r=cs*0.27;
    switch(item.s){
      case "dot":  return <circle key={idx} cx={cx} cy={cy} r={r} fill="#1a1a1a"/>;
      case "circ": return <circle key={idx} cx={cx} cy={cy} r={r} fill="none" stroke="#1a1a1a" strokeWidth={1.4}/>;
      case "sq":   return <rect key={idx} x={cx-r} y={cy-r} width={r*2} height={r*2} fill="none" stroke="#1a1a1a" strokeWidth={1.4}/>;
      case "fsq":  return <rect key={idx} x={cx-r} y={cy-r} width={r*2} height={r*2} fill="#1a1a1a"/>;
      case "tri":  return <polygon key={idx} points={`${cx},${cy-r} ${cx+r},${cy+r} ${cx-r},${cy+r}`} fill="#1a1a1a"/>;
      default: return null;
    }
  };
  return(
    <div style={{width:size,height:size,border:"1.5px solid #d0d0d0",borderRadius:7,overflow:"hidden",background:"white",flexShrink:0}}>
      <svg viewBox="0 0 50 50" width={size} height={size} style={{display:"block"}}>
        {lines}
        {items.map(ri)}
      </svg>
    </div>
  );
}
function GCellMini({cell, size=40}){ return <GCell cell={cell} size={size}/>; }

/* ── String SVG for grid cells (worksheet export) ── */
function _gcell(cell, size=60){
  if(!cell) return `<rect x="1" y="1" width="${size-2}" height="${size-2}" rx="5" fill="#f6f6f6" stroke="#bbb" stroke-width="1" stroke-dasharray="4,2"/>`;
  const n = cell.g==="3x3" ? 3 : 2;
  const cs = size/n;
  let svg=`<rect x="0" y="0" width="${size}" height="${size}" rx="5" fill="white" stroke="#ccc" stroke-width="1"/>`;
  for(let i=1;i<n;i++){
    svg+=`<line x1="${i*cs}" y1="0" x2="${i*cs}" y2="${size}" stroke="#888" stroke-width="0.7"/>`;
    svg+=`<line x1="0" y1="${i*cs}" x2="${size}" y2="${i*cs}" stroke="#888" stroke-width="0.7"/>`;
  }
  const r=cs*0.27;
  for(const item of (cell.items||[])){
    const cx=item.c*cs+cs/2, cy=item.r*cs+cs/2;
    switch(item.s){
      case "dot":  svg+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#111"/>`; break;
      case "circ": svg+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#111" stroke-width="1.4"/>`; break;
      case "sq":   svg+=`<rect x="${cx-r}" y="${cy-r}" width="${r*2}" height="${r*2}" fill="none" stroke="#111" stroke-width="1.4"/>`; break;
      case "fsq":  svg+=`<rect x="${cx-r}" y="${cy-r}" width="${r*2}" height="${r*2}" fill="#111"/>`; break;
      case "tri":  svg+=`<polygon points="${cx},${cy-r} ${cx+r},${cy+r} ${cx-r},${cy+r}" fill="#111"/>`; break;
    }
  }
  return svg;
}



const isPicQ = t => ['matrix','series','odd_one_out'].includes(t);
function optLabel(q,idx){
  if(idx===null||idx===undefined) return '—';
  const o=q.options[idx], l=LB[idx];
  if(typeof o==='number'||typeof o==='string') return `${l}: ${o}`;
  if(o.g) return `${l}: grid pattern`;
  if(o.d!==undefined)  return `${l}: ${o.d} dots`;
  if(o.ar!==undefined) return `${l}: ${o.ar}°`;
  if(o.n!==undefined)  return `${l}: ${o.n}× ${o.s}`;
  if(o.inner) return `${l}: ${o.t} ${o.s} with ${o.inner.t} ${o.inner.s} inside`;
  if(o.pos)   return `${l}: ${o.t} ${o.s} at ${POS_NAME[o.pos]||o.pos}`;
  const sz=o.sz==='lg'?'large':o.sz==='sm'?'small':'medium';
  return `${l}: ${sz} ${o.t} ${o.s}`;
}

const IQL=[
  {min:19,max:20,range:"~135–145+",label:"Exceptional",   c:"#1D9E75"},
  {min:16,max:18,range:"~125–135", label:"Superior",      c:"#378ADD"},
  {min:12,max:15,range:"~115–125", label:"Above Average", c:"#7F77DD"},
  {min:8, max:11,range:"~105–115", label:"Average",       c:"#BA7517"},
  {min:4, max:7, range:"~95–105",  label:"Below Average", c:"#D4537E"},
  {min:0, max:3, range:"~85–95",   label:"Needs Practice",c:"#E24B4A"},
];
const getIQ = s => IQL.find(r=>s>=r.min&&s<=r.max) || IQL[IQL.length-1];

/* ── Question visual (interactive) ── */
function QVisual({q}){
  if(q.type==='matrix') return(
    <div style={{background:"#f7f7f7",borderRadius:10,padding:12,display:"flex",justifyContent:"center"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,68px)",gap:5}}>
        {q.grid.flat().map((cell,i)=><Cell key={i} cell={cell} dashed={cell===null}/>)}
      </div>
    </div>
  );
  if(q.type==='series') return(
    <div style={{background:"#f7f7f7",borderRadius:10,padding:"10px 8px",display:"flex",justifyContent:"center",alignItems:"center",gap:5,flexWrap:"wrap"}}>
      {q.series.map((cell,i)=>(
        <>
          <Cell key={`c${i}`} cell={cell} size={56}/>
          <span key={`a${i}`} style={{color:"#ccc",fontSize:11}}>→</span>
        </>
      ))}
      <Cell cell={null} dashed size={56}/>
    </div>
  );
  if(q.type==='odd_one_out') return(
    <div style={{background:"#f7f7f7",borderRadius:10,padding:"10px 14px"}}>
      <p style={{margin:0,fontSize:13,color:"#888",fontStyle:"italic"}}>Select the shape that does not share a property with the others.</p>
    </div>
  );
  if(q.type==='sequence') return(
    <div style={{background:"#f7f7f7",borderRadius:10,padding:"10px 8px",display:"flex",justifyContent:"center",alignItems:"center",gap:5,flexWrap:"wrap"}}>
      {q.sequence.map((num,i)=>(
        <>
          <div key={`n${i}`} style={{minWidth:42,height:42,background:"white",border:"1px solid #d8d8d8",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:"500",color:"#222",padding:"0 6px"}}>{num}</div>
          <span key={`a${i}`} style={{color:"#ccc",fontSize:11}}>→</span>
        </>
      ))}
      <div style={{minWidth:42,height:42,background:TD,border:`1.5px dashed ${T}`,borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:"600",color:T,padding:"0 6px"}}>?</div>
    </div>
  );
  if(q.type==='analogy') return(
    <div style={{background:"#f7f7f7",borderRadius:10,padding:"16px 18px",textAlign:"center"}}>
      <span style={{fontSize:18,fontWeight:"500",color:"#222",letterSpacing:"0.02em"}}>{q.prompt}</span>
    </div>
  );
  if(q.type==='logic') return(
    <div style={{background:"#f7f7f7",borderRadius:10,padding:12,display:"flex",flexDirection:"column",gap:7}}>
      {q.premises.map((p,i)=>(
        <div key={i} style={{display:"flex",gap:9,alignItems:"flex-start"}}>
          <span style={{background:"white",border:"1px solid #ddd",borderRadius:4,padding:"2px 6px",fontSize:10,color:"#888",flexShrink:0,marginTop:1}}>Premise {i+1}</span>
          <span style={{fontSize:13,color:"#222",lineHeight:1.5}}>{p}</span>
        </div>
      ))}
    </div>
  );
  return null;
}

/* ── Impossible mode warning banner ── */
function ImpossibleWarning(){
  return(
    <div style={{background:"linear-gradient(135deg,#0d0000 0%,#1a0000 100%)",border:"1px solid #550000",borderRadius:10,padding:"10px 14px",marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
      <span style={{fontSize:18,flexShrink:0}}>☠️</span>
      <div>
        <div style={{fontSize:12,fontWeight:"700",color:"#cc2222",letterSpacing:"0.05em"}}>IMPOSSIBLE MODE</div>
        <div style={{fontSize:10,color:"#884444",marginTop:2}}>These questions are designed for the top 1% of IQ scores. Each requires spotting 4–6 simultaneous hidden rules, recognising extremely rare sequences, or chaining 6+ logical premises. Proceed with caution.</div>
      </div>
    </div>
  );
}

/* ── Mode selector (start screen) ── */
const CAT_COLORS = {Pictorial:"#7B2FF7",Number:"#378ADD",Verbal:"#1D9E75",Logic:"#E24B4A"};
const CAT_EMOJIS = {Pictorial:"🖼",Number:"🔢",Verbal:"🔤",Logic:"🔷"};

function ModeSelect({onSelect}){
  const [selCats, setSelCats] = useState([...CATS]);
  const toggleCat = cat => setSelCats(prev =>
    prev.includes(cat) ? (prev.length > 1 ? prev.filter(c=>c!==cat) : prev) : [...prev, cat]
  );
  const [hovered,setHovered]=useState(null);
  return(
    <div style={{maxWidth:480,margin:"0 auto",padding:"1.5rem 1rem 2rem",fontFamily:"system-ui,sans-serif"}}>
      <div style={{textAlign:"center",marginBottom:24}}>
        <div style={{fontSize:28,marginBottom:6}}>🧠</div>
        <div style={{fontSize:20,fontWeight:"700",color:"#111",marginBottom:4}}>IQ Aptitude Practice</div>
        <div style={{fontSize:13,color:"#888"}}>Select a difficulty mode to begin</div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {MODES.map(m=>{
          const isH=hovered===m.id;
          const isImp=m.id==="impossible";
          const bg = isImp ? (isH?"#1a0000":"#0d0d0d") : (isH?`${m.color}0c`:"white");
          const border = isImp ? `1.5px solid ${isH?"#ff3333":"#330000"}` : `1.5px solid ${isH?m.color:"#e5e5e5"}`;
          return(
            <button key={m.id} onClick={()=>onSelect(m.id, selCats)} onMouseEnter={()=>setHovered(m.id)} onMouseLeave={()=>setHovered(null)}
              style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",border,borderRadius:10,background:bg,cursor:"pointer",textAlign:"left",transition:"all 0.15s",width:"100%"}}>
              <span style={{fontSize:20,flexShrink:0}}>{m.emoji}</span>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:"600",color:isImp?(isH?"#ff4444":"#cc2222"):isH?m.color:"#111",marginBottom:2}}>{m.label}</div>
                <div style={{fontSize:11,color:isImp?"#664444":"#888"}}>{m.desc}</div>
              </div>
              <div style={{display:"flex",gap:4,flexShrink:0}}>
                {["Easy","Medium","Hard","Very Hard","Impossible"].map(d=>(
                  <span key={d} style={{fontSize:8,padding:"2px 5px",borderRadius:8,
                    background:m.diff.includes(d)?(d==="Impossible"?"#660000":"#1D9E75"):"#f0f0f0",
                    color:m.diff.includes(d)?"white":"#bbb",fontWeight:"600"}}>
                    {d==="Easy"?"E":d==="Medium"?"M":d==="Hard"?"H":d==="Very Hard"?"VH":"☠"}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
      <div style={{marginTop:14,padding:"12px 14px",background:"#f8f8f8",borderRadius:8}}>
        <div style={{fontSize:11,color:"#888",marginBottom:8,fontWeight:"500"}}>📂 Categories ({selCats.length} selected · {20} questions total)</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:5}}>
          {CATS.map(cat=>{
            const on = selCats.includes(cat);
            const clr = CAT_COLORS[cat];
            return(
              <button key={cat} onClick={()=>toggleCat(cat)}
                style={{textAlign:"center",fontSize:10,fontWeight:"600",padding:"6px 2px",borderRadius:6,
                  border:`1.5px solid ${on?clr:"#ddd"}`,
                  background:on?`${clr}18`:"#fafafa",
                  color:on?clr:"#bbb",cursor:"pointer",transition:"all 0.12s",
                  display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
                <span style={{fontSize:14}}>{CAT_EMOJIS[cat]}</span>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
        <div style={{fontSize:10,color:"#aaa",marginTop:7,textAlign:"center"}}>
          {selCats.length===1 ? `All 20 questions from ${selCats[0]}` : `~${Math.floor(20/selCats.length)} per category · tap to toggle`}
        </div>
      </div>
    </div>
  );
}

/* ── DB info banner (shown on first load) ── */
function DBBanner({onDebug, mode, onChangeMode}){
  const modeInfo = MODES.find(m=>m.id===mode);
  return(
    <div style={{background:"#f8f8f8",border:"1px solid #e5e5e5",borderRadius:10,padding:"8px 12px",marginBottom:12,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
      {modeInfo&&(
        <span style={{fontSize:11,padding:"2px 10px",borderRadius:10,background:`${modeInfo.color}18`,color:modeInfo.color,fontWeight:"600",display:"flex",alignItems:"center",gap:4}}>
          {modeInfo.emoji} {modeInfo.label}
        </span>
      )}
      <span style={{fontSize:10,color:"#aaa"}}>200 Q bank · 5 per category</span>
      <div style={{display:"flex",gap:5,marginLeft:"auto"}}>
        <button onClick={onChangeMode} title="Change difficulty mode" style={{fontSize:10,padding:"3px 9px",border:"1px solid #ddd",borderRadius:5,background:"#fff",cursor:"pointer",color:"#666"}}>⚙ Mode</button>
        <button onClick={onDebug} title="Review all questions" style={{fontSize:10,padding:"3px 9px",border:"1px solid #ddd",borderRadius:5,background:"#fff",cursor:"pointer",color:"#666"}}>🔍 Audit</button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   DEBUG VIEW  — all 120 questions, filterable
   ══════════════════════════════════════════════════ */
function DebugView({onClose}){
  const DIFF_ORDER = ["Easy","Medium","Hard"];
  const DIFF_COLOR = {Easy:"#1D9E75", Medium:"#BA7517", Hard:"#E24B4A"};
  const [filter, setFilter] = useState({cat:"All", diff:"All"});
  const [showAns, setShowAns] = useState(true);

  const allQ = CATS.flatMap(cat => QUESTION_BANK[cat]);
  const filtered = allQ.filter(q =>
    (filter.cat  === "All" || q.cat  === filter.cat) &&
    (filter.diff === "All" || q.diff === filter.diff)
  );

  const grouped = {};
  CATS.forEach(cat => {
    grouped[cat] = {};
    DIFF_ORDER.forEach(d => { grouped[cat][d] = []; });
  });
  filtered.forEach(q => {
    if(grouped[q.cat] && grouped[q.cat][q.diff]) grouped[q.cat][q.diff].push(q);
  });

  return(
    <div style={{fontFamily:"system-ui,sans-serif",maxWidth:700,margin:"0 auto",padding:"0 1rem 3rem"}}>

      {/* Sticky toolbar */}
      <div style={{position:"sticky",top:0,zIndex:20,background:"#fff",borderBottom:"1px solid #e5e5e5",padding:"10px 0",marginBottom:16,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
        <button onClick={onClose} style={{fontSize:12,padding:"6px 14px",border:"1px solid #ddd",borderRadius:6,background:"#f5f5f5",cursor:"pointer",color:"#444",fontWeight:"500",flexShrink:0}}>← Back</button>
        <span style={{fontSize:12,fontWeight:"600",color:"#333"}}>Question Bank Audit</span>
        <span style={{fontSize:11,color:"#aaa"}}>— {filtered.length} / {allQ.length} questions</span>
        <select value={filter.cat} onChange={e=>setFilter(f=>({...f,cat:e.target.value}))}
          style={{marginLeft:"auto",fontSize:11,padding:"4px 8px",border:"1px solid #ddd",borderRadius:5,background:"#fafafa",cursor:"pointer"}}>
          <option value="All">All categories</option>
          {CATS.map(c=><option key={c} value={c}>{c}</option>)}
        </select>
        <select value={filter.diff} onChange={e=>setFilter(f=>({...f,diff:e.target.value}))}
          style={{fontSize:11,padding:"4px 8px",border:"1px solid #ddd",borderRadius:5,background:"#fafafa",cursor:"pointer"}}>
          <option value="All">All difficulties</option>
          {DIFF_ORDER.map(d=><option key={d} value={d}>{d}</option>)}
        </select>
        <label style={{fontSize:11,color:"#666",display:"flex",alignItems:"center",gap:4,cursor:"pointer",flexShrink:0}}>
          <input type="checkbox" checked={showAns} onChange={e=>setShowAns(e.target.checked)} style={{cursor:"pointer"}}/>
          Show answers
        </label>
      </div>

      {/* Sections: category → difficulty → questions */}
      {CATS.filter(cat => filter.cat==="All" || filter.cat===cat).map(cat => {
        const catHasQ = DIFF_ORDER.some(d => grouped[cat][d].length > 0);
        if(!catHasQ) return null;
        const catTotal = DIFF_ORDER.reduce((s,d)=>s+grouped[cat][d].length,0);
        return(
          <div key={cat} style={{marginBottom:28}}>
            <div style={{fontSize:15,fontWeight:"700",color:CC[cat],borderBottom:`2px solid ${CC[cat]}`,paddingBottom:6,marginBottom:14,display:"flex",alignItems:"center",gap:8}}>
              {cat} Reasoning
              <span style={{fontSize:11,fontWeight:"400",color:"#aaa"}}>({catTotal} shown)</span>
            </div>

            {DIFF_ORDER.filter(diff => filter.diff==="All" || filter.diff===diff).map(diff => {
              const qs = grouped[cat][diff];
              if(!qs.length) return null;
              return(
                <div key={diff} style={{marginBottom:14}}>
                  <div style={{fontSize:11,fontWeight:"700",color:DIFF_COLOR[diff],textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8,display:"flex",alignItems:"center",gap:6}}>
                    <span style={{width:7,height:7,borderRadius:"50%",background:DIFF_COLOR[diff],display:"inline-block",flexShrink:0}}/>
                    {diff} — {qs.length} question{qs.length!==1?"s":""}
                  </div>

                  <div style={{display:"flex",flexDirection:"column",gap:6}}>
                    {qs.map(q => {
                      const isPO = isPicQ(q.type);
                      return(
                        <div key={q.id} style={{border:"1px solid #e5e5e5",borderLeft:`3px solid ${DIFF_COLOR[diff]}`,borderRadius:"0 8px 8px 0",padding:"10px 12px",background:"#fff"}}>
                          {/* Header */}
                          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"}}>
                            <span style={{fontSize:11,fontWeight:"700",color:"#bbb",minWidth:32}}>#{q.id}</span>
                            <span style={{fontSize:12,fontWeight:"500",color:"#222",flex:1}}>{q.title}</span>
                            <span style={{fontSize:10,color:"#ccc",fontStyle:"italic",textAlign:"right"}}>{q.summary}</span>
                          </div>

                          {/* Visual */}
                          <div style={{marginBottom:10}}><QVisual q={q}/></div>

                          {/* Options */}
                          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5,marginBottom:showAns?7:0}}>
                            {q.options.map((opt,oi)=>{
                              const isCorr = oi===q.ans;
                              return(
                                <div key={oi} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 8px",borderRadius:6,
                                  background:showAns&&isCorr?"rgba(29,158,117,0.07)":"#f8f8f8",
                                  border:`1px solid ${showAns&&isCorr?"rgba(29,158,117,0.3)":"#e5e5e5"}`}}>
                                  <span style={{width:18,height:18,borderRadius:4,flexShrink:0,
                                    background:showAns&&isCorr?T:"#ddd",
                                    color:showAns&&isCorr?"#fff":"#888",
                                    display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:"700"}}>
                                    {["A","B","C","D"][oi]}
                                  </span>
                                  {isPO
                                    ? (opt && opt.g
                                        ? <GCell cell={opt} size={32}/>
                                        : <svg width="32" height="32" viewBox="0 0 50 50"><ShapeEl cell={opt}/></svg>)
                                    : <span style={{fontSize:12,color:showAns&&isCorr?T:"#333",fontWeight:showAns&&isCorr?"600":"400"}}>
                                        {typeof opt==="number"||typeof opt==="string"?opt:"?"}
                                      </span>
                                  }
                                  {showAns&&isCorr&&<span style={{fontSize:10,color:T,marginLeft:"auto",fontWeight:"700",flexShrink:0}}>✓</span>}
                                </div>
                              );
                            })}
                          </div>

                          {/* Explanation */}
                          {showAns&&(
                            <div style={{fontSize:11,color:"#555",lineHeight:1.6,padding:"6px 8px",background:"#f0faf5",borderRadius:5,borderLeft:`2px solid ${T}`}}>
                              <span style={{fontWeight:"700",color:T}}>Ans {["A","B","C","D"][q.ans]}:</span> {q.exp}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      {filtered.length===0&&(
        <div style={{textAlign:"center",padding:"3rem",color:"#bbb",fontSize:14}}>No questions match the selected filters.</div>
      )}
    </div>
  );
}

/* ── Results screen ── */
function Results({questions, answers, onRestart, onChangeMode, mode}){
  const score = Object.values(answers).filter(a=>a?.ok).length;
  const iq    = getIQ(score);
  const catStats = CATS.map(cat=>{
    let ok=0, tot=0;
    questions.forEach((q,i)=>{ if(q.cat===cat){ tot++; if(answers[i]?.ok) ok++; } });
    return {cat,ok,tot};
  });
  const [dlStatus,setDlStatus] = useState(null);
  function dl(withKey){ downloadWorksheet(questions, withKey); setDlStatus(withKey); }

  return(
    <div style={{maxWidth:520,margin:"0 auto",padding:"1rem",fontFamily:"system-ui,sans-serif"}}>
      {/* Score */}
      <div style={{textAlign:"center",padding:"1.5rem 0 1rem"}}>
        <div style={{fontSize:62,fontWeight:"600",color:iq.c,lineHeight:1,marginBottom:4}}>
          {score}<span style={{fontSize:26,color:"#ccc",fontWeight:"400"}}>/{questions.length}</span>
        </div>
        <div style={{fontSize:17,color:iq.c,fontWeight:"600",marginBottom:2}}>{iq.label}</div>
        <div style={{fontSize:13,color:"#666"}}>Estimated IQ: <span style={{color:"#222",fontWeight:"500"}}>{iq.range}</span></div>
        <div style={{fontSize:10,color:"#bbb",marginTop:5}}>Practice estimate only — not a certified psychometric assessment</div>
      </div>

      {/* Category breakdown */}
      <div style={{background:"#f8f8f8",borderRadius:12,padding:"14px 16px",marginBottom:14}}>
        <div style={{fontSize:10,fontWeight:"600",color:"#999",marginBottom:12,letterSpacing:"0.08em",textTransform:"uppercase"}}>Score breakdown</div>
        {catStats.map(({cat,ok,tot})=>{
          const pct=Math.round((ok/tot)*100);
          return(
            <div key={cat} style={{marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                <span style={{fontSize:12,color:"#333"}}>{cat}</span>
                <span style={{fontSize:12,color:"#888"}}>{ok}/{tot} <span style={{color:CC[cat],fontWeight:"600"}}>{pct}%</span></span>
              </div>
              <div style={{height:5,background:"#e5e5e5",borderRadius:4,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${pct}%`,background:CC[cat],borderRadius:4}}/>
              </div>
            </div>
          );
        })}
      </div>

      {/* Question review */}
      <div style={{marginBottom:14}}>
        <div style={{fontSize:10,fontWeight:"600",color:"#999",marginBottom:10,letterSpacing:"0.08em",textTransform:"uppercase"}}>Question review</div>
        <div style={{display:"flex",flexDirection:"column",gap:4}}>
          {questions.map((q,i)=>{
            const a=answers[i], ok=a?.ok, userSel=a?.sel, isPO=isPicQ(q.type);
            return(
              <div key={i} style={{background:"#f8f8f8",border:`1px solid ${ok?"rgba(29,158,117,0.25)":"rgba(226,75,74,0.25)"}`,borderRadius:8,padding:"7px 10px"}}>
                <div style={{display:"flex",alignItems:"center",gap:7,flexWrap:"wrap"}}>
                  <span style={{width:16,height:16,borderRadius:"50%",background:ok?"rgba(29,158,117,0.15)":ED,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:ok?T:E,fontWeight:"700",flexShrink:0}}>{ok?'✓':'✗'}</span>
                  <span style={{fontSize:11,color:"#999"}}>Q{i+1}</span>
                  <span style={{fontSize:10,background:`${CC[q.cat]}18`,color:CC[q.cat],padding:"1px 6px",borderRadius:10}}>{q.cat}</span>
                  <span style={{fontSize:11,color:"#333",flex:1,minWidth:80}}>{q.summary}</span>
                  <span style={{fontSize:9,color:"#bbb"}}>{q.diff}</span>
                </div>
                {!ok&&userSel!==undefined&&(
                  <div style={{marginTop:5,marginLeft:23,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                    <div style={{display:"flex",alignItems:"center",gap:4}}>
                      <span style={{fontSize:10,color:"#bbb"}}>You:</span>
                      {isPO?<Tiny cell={q.options[userSel]}/>:<span style={{fontSize:11,color:E,fontWeight:"500"}}>{optLabel(q,userSel)}</span>}
                      {isPO&&<span style={{fontSize:10,color:E,fontWeight:"500"}}>{LB[userSel]}</span>}
                    </div>
                    <span style={{fontSize:10,color:"#ccc"}}>→</span>
                    <div style={{display:"flex",alignItems:"center",gap:4}}>
                      <span style={{fontSize:10,color:"#bbb"}}>Correct:</span>
                      {isPO?<Tiny cell={q.options[q.ans]}/>:<span style={{fontSize:11,color:T,fontWeight:"500"}}>{optLabel(q,q.ans)}</span>}
                      {isPO&&<span style={{fontSize:10,color:T,fontWeight:"500"}}>{LB[q.ans]}</span>}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Export */}
      <div style={{background:"#f0faf5",border:"1px solid #b2dfce",borderRadius:10,padding:"12px 14px",marginBottom:10}}>
        <div style={{fontSize:12,fontWeight:"600",color:"#1D9E75",marginBottom:6}}>📄 Export Worksheet</div>
        <div style={{fontSize:12,color:"#555",marginBottom:10,lineHeight:1.5}}>Downloads a standalone <code style={{background:"#e8f5ee",padding:"1px 4px",borderRadius:3,fontSize:11}}>.html</code> file. Open it in any browser, then print or save as PDF.</div>
        <div style={{display:"flex",gap:8}}>
          <button onClick={()=>dl(false)} style={{flex:1,fontSize:12,padding:"9px",border:`1px solid ${dlStatus===false?"#1D9E75":"#ccc"}`,borderRadius:8,background:dlStatus===false?"#e8f5ee":"white",cursor:"pointer",color:"#333",fontWeight:"500"}}>⬇ Questions only</button>
          <button onClick={()=>dl(true)}  style={{flex:1,fontSize:12,padding:"9px",border:`1px solid ${dlStatus===true ?"#1D9E75":"#ccc"}`,borderRadius:8,background:dlStatus===true ?"#e8f5ee":"white",cursor:"pointer",color:"#333",fontWeight:"500"}}>⬇ + Answer Key</button>
        </div>
        {dlStatus!==null&&<div style={{marginTop:8,fontSize:11,color:"#1D9E75"}}>✅ Downloaded! Open the .html file in your browser to print.</div>}
      </div>

      <button onClick={onRestart} style={{width:"100%",background:T,color:"#fff",border:"none",borderRadius:8,padding:"11px",fontSize:13,cursor:"pointer",fontWeight:"500"}}>Try Again</button>
    </div>
  );
}

/* ── Root ── */
export default function IQTest(){
  const [mode,    setMode]    = useState(null);           // null = show mode select
  const [questions,setQuestions] = useState([]);
  const [cur,     setCur]     = useState(0);
  const [sel,     setSel]     = useState(null);
  const [answers, setAnswers] = useState({});
  const [revealed,setRevealed]= useState(false);
  const [done,    setDone]    = useState(false);
  const [dlStatus,setDlStatus]= useState(null);
  const [showBanner,setShowBanner] = useState(true);
  const [debug,   setDebug]   = useState(false);

  function startMode(m, cats){
    setMode(m);
    setQuestions(selectQuestions(m, cats));
    setCur(0); setSel(null); setAnswers({}); setRevealed(false); setDone(false); setDlStatus(null); setShowBanner(true);
  }
  function restart(){ startMode(mode); }
  function changeMode(){ setMode(null); setDone(false); setDebug(false); }

  if(!mode) return <ModeSelect onSelect={startMode}/>;

  const q       = questions[cur];
  const isLast  = cur === questions.length - 1;
  const isPO    = q ? isPicQ(q.type) : false;
  const correct = sel === (q ? q.ans : -1);

  const select  = i => { if(!revealed) setSel(i); };
  const confirm = () => { if(sel===null) return; setRevealed(true); setAnswers(p=>({...p,[cur]:{sel,ok:sel===q.ans}})); };
  const next    = () => { if(isLast){ setDone(true); return; } setCur(c=>c+1); setSel(null); setRevealed(false); };
  function dl(withKey){ downloadWorksheet(questions, withKey); setDlStatus(withKey); }

  if(debug) return <DebugView onClose={()=>setDebug(false)}/>;
  if(done) return <Results questions={questions} answers={answers} onRestart={restart} onChangeMode={changeMode} mode={mode}/>;

  const pct = Math.round((cur / questions.length) * 100);

  return(
    <div style={{maxWidth:540,margin:"0 auto",padding:"1rem",fontFamily:"system-ui,sans-serif"}}>

      {/* DB info banner */}
      {showBanner && <DBBanner onDebug={()=>setDebug(true)} mode={mode} onChangeMode={changeMode}/>}
      {mode==="impossible" && <ImpossibleWarning/>}

      {/* Progress + export buttons */}
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
        <div style={{flex:1,height:4,background:"#eee",borderRadius:4,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${pct}%`,background:T,borderRadius:4,transition:"width 0.3s"}}/>
        </div>
        <span style={{fontSize:12,color:"#999",whiteSpace:"nowrap"}}>{cur+1}/{questions.length}</span>
        <div style={{display:"flex",gap:5,marginLeft:2}}>
          <button onClick={()=>dl(false)} title="Download worksheet" style={{fontSize:10,padding:"3px 9px",border:"1px solid #ddd",borderRadius:5,background:dlStatus===false?"#e8f5ee":"#fafafa",cursor:"pointer",color:"#666"}}>⬇ Worksheet</button>
          <button onClick={()=>dl(true)}  title="Download with answer key" style={{fontSize:10,padding:"3px 9px",border:"1px solid #ddd",borderRadius:5,background:dlStatus===true?"#e8f5ee":"#fafafa",cursor:"pointer",color:"#666"}}>⬇ + Key</button>
        </div>
      </div>

      {dlStatus!==null&&<div style={{fontSize:11,color:T,background:"#e8f5ee",border:"1px solid #b2dfce",borderRadius:6,padding:"6px 10px",marginBottom:10}}>✅ Downloaded! Open the .html file in your browser, then print or Ctrl+P / ⌘P.</div>}

      {/* Category + difficulty badges */}
      <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}>
        <span style={{background:`${CC[q.cat]}18`,color:CC[q.cat],padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:"500"}}>{q.cat} reasoning</span>
        <span style={{
          background:q.diff==="Impossible"?"#1a0000":"#f5f5f5",
          color:q.diff==="Impossible"?"#cc2222":"#999",
          padding:"3px 10px",borderRadius:20,fontSize:11,
          border:q.diff==="Impossible"?"1px solid #550000":"1px solid #eee",
          fontWeight:q.diff==="Impossible"?"700":"400",
        }}>{q.diff==="Impossible"?"☠️ Impossible":q.diff}</span>
      </div>

      {/* Question */}
      <div style={{fontSize:15,fontWeight:"500",color:"#111",marginBottom:12,lineHeight:1.5}}>{q.title}</div>
      <div style={{marginBottom:14}}><QVisual q={q}/></div>

      {/* Options */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7,marginBottom:12}}>
        {q.options.map((opt,i)=>{
          const isSel=sel===i, isAns=i===q.ans;
          let bg="#f8f8f8", border="#e5e5e5", tc="#222";
          if(revealed){ if(isAns){bg=TD;border=T;tc=T;} else if(isSel){bg=ED;border=E;tc=E;} }
          else if(isSel){ bg=TD; border=T; }
          const lbBg=(isSel||(revealed&&isAns))?((revealed&&!isAns&&isSel)?E:T):"#ddd";
          const lbTc=(isSel||(revealed&&isAns))?"#fff":"#888";
          return(
            <button key={i} onClick={()=>select(i)} style={{background:bg,border:`1px solid ${border}`,borderRadius:8,padding:isPO?"8px":"9px 12px",cursor:revealed?"default":"pointer",display:"flex",alignItems:"center",gap:7,textAlign:"left",transition:"all 0.15s",width:"100%"}}>
              <span style={{width:20,height:20,borderRadius:4,flexShrink:0,background:lbBg,color:lbTc,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:"600",transition:"all 0.15s"}}>{LB[i]}</span>
              {isPO
                ? (opt && opt.g
                    ? <GCellMini cell={opt} size={40}/>
                    : <svg width="40" height="40" viewBox="0 0 50 50"><ShapeEl cell={opt}/></svg>)
                : <span style={{fontSize:13,color:tc}}>{opt}</span>
              }
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed&&(
        <div style={{background:"#f8f8f8",borderLeft:`3px solid ${correct?T:E}`,borderRadius:"0 8px 8px 0",padding:"9px 13px",marginBottom:12}}>
          <div style={{fontSize:12,fontWeight:"600",color:correct?T:E,marginBottom:3}}>{correct?"Correct!":"Incorrect"}</div>
          <div style={{fontSize:12,color:"#666",lineHeight:1.6}}>{q.exp}</div>
        </div>
      )}

      {/* Action */}
      {!revealed
        ? <button onClick={confirm} disabled={sel===null} style={{width:"100%",background:sel!==null?T:"#f0f0f0",color:sel!==null?"#fff":"#bbb",border:"none",borderRadius:8,padding:"10px",fontSize:13,cursor:sel!==null?"pointer":"not-allowed",fontWeight:"500",transition:"all 0.2s"}}>Check Answer</button>
        : <button onClick={next} style={{width:"100%",background:T,color:"#fff",border:"none",borderRadius:8,padding:"10px",fontSize:13,cursor:"pointer",fontWeight:"500"}}>{isLast?"See Results →":"Next Question →"}</button>
      }
    </div>
  );
}
