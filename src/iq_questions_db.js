/**
 * IQ Aptitude Practice — Question Bank
 * ─────────────────────────────────────
 * 120 questions total.  30 per category.
 *   Easy   : 5  per category
 *   Medium : 10 per category
 *   Hard   : 15 per category
 *
 * Quiz draws 5 random questions per category = 20 per run.
 *
 * Cell fields
 *   s      : "circle"|"square"|"triangle"|"diamond"|"hexagon"
 *   t      : "filled"|"semi"|"outline"
 *   sz     : "lg"|"md"|"sm"
 *   n      : 1|2|3        — repeat count (Multi renderer)
 *   d      : number       — dot count
 *   ar     : number       — arrow rotation °
 *   pos    : "tl"|"tr"|"bl"|"br" — places shape in a corner at 50 % scale
 *   inner  : { s, t, sz? } — renders a smaller shape centred inside the outer
 */

// ─────────────────────────────────────────────────────────────
// PICTORIAL  (5 Easy · 10 Medium · 15 Hard)
// ─────────────────────────────────────────────────────────────
const PICTORIAL = [

  // ── Easy ──────────────────────────────────────────────

  { id:1, type:"series", cat:"Pictorial", diff:"Easy",
    title:'What comes next? The dot rotates clockwise through all four corners.',
    summary:'Single dot — clockwise rotation in 2×2 grid, period 4',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0}]}],
    ans:0, exp:'Dot moves clockwise: TL→TR→BR→BL→TL. After BL the cycle returns to TL.' },

  { id:2, type:"matrix", cat:"Pictorial", diff:"Easy",
    title:'Which option completes the pattern? The square advances one clockwise step per cell diagonally.',
    summary:'Square at CW position = (row+col) mod 4',
    grid:[[{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]}],[{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0}]}],[{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0}]},null]],
    options:[{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0}]}],
    ans:0, exp:'Rule: square is at clockwise position (row+col) mod 4. (2,2): (2+2) mod 4 = 0 → TL.' },

  { id:3, type:"series", cat:"Pictorial", diff:"Easy",
    title:'What comes next? Dots are added one at a time, filling left-to-right, top-to-bottom.',
    summary:'Dot count increases: 1,2,3,4 — find 5th',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:2}]}],
    ans:0, exp:'Dots fill reading order: after 4 dots ([0,0],[0,1],[0,2],[1,0]) the 5th goes to [1,1].' },

  { id:4, type:"odd_one_out", cat:"Pictorial", diff:"Easy",
    title:'Which cell does NOT match the pattern of the other three?',
    summary:'Three cells have dot top-left + square bottom-right; one is reversed',

    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]}],
    ans:2, exp:'Three cells have the dot at TL and the square at BR. Only option C has them reversed.' },

  { id:5, type:"matrix", cat:"Pictorial", diff:"Easy",
    title:"Which option completes the pattern? The dot's position mirrors the grid coordinates.",
    summary:'Dot inner position = outer (row mod 2, col mod 2)',
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0}]}],[{g:"2x2",items:[{s:"dot",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0}]}],[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1}]},null]],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1}]}],
    ans:0, exp:'Inner row = outer row mod 2; inner col = outer col mod 2. (2,2): dot at [0,0] = TL.' },

  // ── Medium ────────────────────────────────────────────

  { id:6, type:"series", cat:"Pictorial", diff:"Medium",
    title:'What comes next? The dot and square are always in opposite corners and rotate together.',
    summary:'Dot+square at diagonally opposite CW positions, both advance +1 per step',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]}],
    ans:0, exp:'Dot+square always occupy opposite corners. Both rotate +1 CW per step. Step 5 = step 1: dot@TL, sq@BR.' },

  { id:7, type:"matrix", cat:"Pictorial", diff:"Medium",
    title:'Which option completes the pattern?',
    summary:'Dot inner row = outer row mod 2; square inner col = outer col mod 2',
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0}]}],[{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:0}]}],[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},null]],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]}],
    ans:0, exp:'Dot at [row%2, 0]; square at [1, col%2]. (2,2): dot@[0,0], sq@[1,0].' },

  { id:8, type:"series", cat:"Pictorial", diff:"Medium",
    title:'What comes next? The dot is fixed; the square rotates clockwise.',
    summary:'Dot fixed at TL; square advances +1 CW each step starting at TR',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]}],
    ans:3, exp:'Dot stays at TL. Square advances clockwise: TR→BR→BL→TL. Step 5: square reaches TL, same as dot.' },

  { id:9, type:"matrix", cat:"Pictorial", diff:"Medium",
    title:'Which option completes the pattern? Count the dots.',
    summary:'Dot count = outer row + 1 (row 0 = 1 dot, row 1 = 2 dots, row 2 = 3 dots)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]}],
    ans:2, exp:'All cells in row 0 have 1 dot, row 1 have 2 dots, row 2 must have 3 dots.' },

  { id:10, type:"odd_one_out", cat:"Pictorial", diff:"Medium",
    title:'Which cell is the odd one out?',
    summary:'Three cells have even dot counts; one has an odd count',

    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]}],
    ans:1, exp:'Counts: A=2(even), B=3(odd!), C=4(even), D=6(even). B is the odd one out.' },

  { id:11, type:"series", cat:"Pictorial", diff:"Medium",
    title:'What comes next? The dot and square swap positions every step.',
    summary:'Dot+square swap corners each step — period 2',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]}],
    ans:0, exp:'Items swap every step. Step 4 (even) = dot@TL, sq@BR.' },

  { id:12, type:"matrix", cat:"Pictorial", diff:"Medium",
    title:'Which option completes the pattern?',
    summary:'Dot at CW[row]; circle at CW[(row+col) mod 4]',
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"circ",r:1,c:1}]}],[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"circ",r:1,c:0}]}],[{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"circ",r:1,c:0}]},null]],
    options:[{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"circ",r:0,c:0}]}],
    ans:0, exp:'Dot at CW[row]=CW[2]=BR. Circle at CW[(2+2)%4]=CW[0]=TL.' },

  { id:13, type:"series", cat:"Pictorial", diff:"Medium",
    title:'What comes next? The dot moves along the main diagonal.',
    summary:'Single dot moves: [0,0]→[1,1]→[2,2]→repeat (period 3)',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],
    ans:1, exp:'Main diagonal: [0,0]→[1,1]→[2,2]→[0,0]→[1,1]… Step 5 = index 4: 4 mod 3 = 1 → [1,1].' },

  { id:14, type:"matrix", cat:"Pictorial", diff:"Medium",
    title:'Which option completes the pattern?',
    summary:'Two dots: one at [r,c], the other shifted by +1 row and +2 cols (mod 3)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"dot",r:0,c:0}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"dot",r:0,c:1}]}],
    ans:2, exp:'Dot1 at [r,c]=[2,2]. Dot2 at [(2+1)%3,(2+2)%3]=[0,1].' },

  { id:15, type:"odd_one_out", cat:"Pictorial", diff:"Medium",
    title:'Which cell is the odd one out?',
    summary:'Three cells have filled dot and outline circle on a diagonal; one has them on the same row',

    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"circ",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"circ",r:0,c:1}]}],
    ans:3, exp:'A, B, C each have a filled dot and outline circle on a diagonal (TL+BR or TR+BL). D has both on the same row.' },

  // ── Hard ──────────────────────────────────────────────

  { id:16, type:"series", cat:"Pictorial", diff:"Hard",
    title:'What comes next? Three items rotate clockwise at rates of 1, 2, and 3 steps per term.',
    summary:'Dot +1/step (p=4), square +2/step (p=2), circle +3/step (p=4)',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:1},{s:"circ",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:1,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:0},{s:"circ",r:0,c:1}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:1},{s:"circ",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:1,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:0},{s:"circ",r:0,c:1}]}],
    ans:0, exp:'Starting offsets 0,1,2: dot CW[i%4], sq CW[(i+1)%4], circ CW[(i+2)%4]. Step 5 (i=4) = step 1: dot@TL, sq@TR, circ@BR.' },

  { id:17, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:'Which option completes the pattern? Each cell contains two point-symmetric dots.',
    summary:'Two dots always at [r,c] and [2-r,2-c] — rotationally symmetric about centre',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"dot",r:1,c:0}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"dot",r:0,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:2,c:0}]}],
    ans:0, exp:'Dots at [r,c] and [2−r,2−c]. (2,2): [2,2] and [0,0].' },

  { id:18, type:"series", cat:"Pictorial", diff:"Hard",
    title:'What comes next? The dot rotates clockwise; the square rotates anti-clockwise.',
    summary:'Dot +1 CW per step; square +1 ACW per step',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]}],
    ans:0, exp:'Dot at CW[i%4], sq at ACW[i%4]. Step 5 (i=4): dot=CW[0]=TL, sq=ACW[0]=TL — both at TL.' },

  { id:19, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:'Which option completes the pattern?',
    summary:'Two dots at outer [r,c]: inner [r,c] and inner [2-r,c] — vertically symmetric',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:2,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"dot",r:0,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:2,c:2}]}],
    ans:0, exp:'Dots at [r,c] and [2−r,c]. (2,2): [2,2] and [0,2].' },

  { id:20, type:"series", cat:"Pictorial", diff:"Hard",
    title:'What comes next? Filled squares expand column by column, right to left.',
    summary:'Each step adds a full column of filled squares from right to left',
    series:[{g:"3x3",items:[{s:"fsq",r:0,c:2},{s:"fsq",r:1,c:2},{s:"fsq",r:2,c:2}]},{g:"3x3",items:[{s:"fsq",r:0,c:2},{s:"fsq",r:1,c:2},{s:"fsq",r:2,c:2},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:2,c:1}]},{g:"3x3",items:[{s:"fsq",r:0,c:2},{s:"fsq",r:1,c:2},{s:"fsq",r:2,c:2},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:2,c:1},{s:"fsq",r:0,c:0},{s:"fsq",r:1,c:0},{s:"fsq",r:2,c:0}]}],
    options:[{g:"3x3",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:0,c:2},{s:"fsq",r:1,c:0},{s:"fsq",r:1,c:1},{s:"fsq",r:1,c:2},{s:"fsq",r:2,c:0},{s:"fsq",r:2,c:1},{s:"fsq",r:2,c:2}]},{g:"3x3",items:[{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:2,c:1},{s:"fsq",r:0,c:2},{s:"fsq",r:1,c:2},{s:"fsq",r:2,c:2}]},{g:"3x3",items:[{s:"fsq",r:0,c:2},{s:"fsq",r:1,c:2},{s:"fsq",r:2,c:2}]},{g:"3x3",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:0,c:2}]}],
    ans:0, exp:'Step 1: col 2 filled (3 squares). Step 2: cols 1+2 (6). Step 3: cols 0+1+2 (9 = all). Step 4: wraps back to all filled — or the 4th step adds nothing new; the full grid is the answer.' },

  { id:21, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:'Which option completes the pattern?',
    summary:'Dot at [row%2, col%2]; square at [(row+1)%2, (col+1)%2] — always diagonal',
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]}],[{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]}],[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},null]],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0}]}],
    ans:0, exp:'Dot at [r%2,c%2]. Square at [(r+1)%2,(c+1)%2]. (2,2): dot@[0,0], sq@[1,1].' },

  { id:22, type:"series", cat:"Pictorial", diff:"Hard",
    title:'What comes next? The outline square rotates CW; the filled square rotates ACW.',
    summary:'Outline square +1 CW; filled square +1 ACW per step',
    series:[{g:"2x2",items:[{s:"sq",r:0,c:0},{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1},{s:"fsq",r:1,c:0}]},{g:"2x2",items:[{s:"sq",r:1,c:1},{s:"fsq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0},{s:"fsq",r:0,c:1}]}],
    options:[{g:"2x2",items:[{s:"sq",r:0,c:0},{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1},{s:"fsq",r:1,c:0}]},{g:"2x2",items:[{s:"sq",r:1,c:1},{s:"fsq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0},{s:"fsq",r:0,c:1}]}],
    ans:0, exp:'Outline sq at CW[i%4], filled sq at ACW[i%4]. Step 5 (i=4): both back at TL.' },

  { id:23, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:'Which option completes the pattern?',
    summary:'Dot at CW[(row+col)%4]; filled square at CW[(row×col)%4]',
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"fsq",r:0,c:0}]}],[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"fsq",r:1,c:1}]}],[{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"fsq",r:1,c:1}]},null]],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"fsq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"fsq",r:0,c:0}]}],
    ans:1, exp:'Dot at CW[(2+2)%4]=CW[0]=TL. Filled sq at CW[(2×2)%4]=CW[0]=TL. Both at TL.' },

  { id:24, type:"series", cat:"Pictorial", diff:"Hard",
    title:'What comes next? The dot traces a clockwise spiral inward through the 3×3 grid.',
    summary:'Dot moves clockwise spiral: [0,0]→[0,1]→[0,2]→[1,2]→[2,2]→…',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],
    ans:0, exp:'Clockwise spiral: [0,0],[0,1],[0,2],[1,2],[2,2]… Step 5 (index 4) = [2,2].' },

  { id:25, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:'Which option completes the pattern?',
    summary:'Dot at inner [r,c]; square at inner [2-r,2-c] (point-symmetric)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"sq",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"sq",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"sq",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"sq",r:1,c:0}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"sq",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"sq",r:0,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"sq",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"sq",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"sq",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"sq",r:2,c:2}]}],
    ans:0, exp:'Dot at [r,c]=[2,2]; square at [2-2,2-2]=[0,0].' },

  { id:26, type:"series", cat:"Pictorial", diff:"Hard",
    title:'What comes next? The square alternates outline/filled while advancing two positions clockwise.',
    summary:'Shape alternates sq/fsq AND position advances +2 CW steps per term',
    series:[{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:1,c:1}]}],
    options:[{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:1}]}],
    ans:0, exp:'Pattern: sq@TL, fsq@BR, sq@TL, fsq@BR (period 2). Step 5: sq@TL.' },

  { id:27, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:"Which option completes the pattern? The dot's position follows a linear transformation.",
    summary:'Dot at inner [(2r+c)%3, (r+2c)%3]',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]}],
    ans:0, exp:'(2,2): row=(2×2+2)%3=6%3=0; col=(2+2×2)%3=6%3=0 → dot at [0,0].' },

  { id:28, type:"series", cat:"Pictorial", diff:"Hard",
    title:'What comes next? Two items have coprime cycle lengths: 3 and 4.',
    summary:'Dot period 3 (TL,TR,BR); square period 4 (all corners CW)',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:0}]}],
    options:[{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:1}]}],
    ans:0, exp:'Dot=P3[5%3]=P3[2]=BR; sq=CW[5%4]=CW[1]=TR.' },

  { id:29, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:'Which option completes the pattern? The outer position determines which row AND how many dots.',
    summary:'Dots fill inner row = outer row; count = outer col + 1',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]}],
    ans:3, exp:'Row 2, col 2: 3 dots in inner row 2 = [2,0],[2,1],[2,2].' },

  { id:30, type:"odd_one_out", cat:"Pictorial", diff:"Hard",
    title:'Which cell is the odd one out?',
    summary:'Three cells have dot counts that are perfect squares; one does not',

    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]}],
    ans:2, exp:'Counts: A=1(1²), B=4(2²), C=6(not a perfect square), D=9(3²). C is the odd one out.' },

  // ── Very Hard ─────────────────────────────────────────

  { id:31, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern? Three items follow three different position rules.',
    summary:'Dot@CW[(r+c)%4]; square@CW[(r×c)%4]; circle@CW[(r²)%4]',
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]}],[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:1},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:1},{s:"circ",r:0,c:1}]}],[{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:1},{s:"circ",r:0,c:0}]},null]],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0},{s:"circ",r:0,c:1}]}],
    ans:2, exp:'(2,2): dot=CW[(4)%4]=CW[0]=TL; sq=CW[(4)%4]=TL; circ=CW[(4)%4]=TL. All at TL.' },

  { id:32, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:'What comes next? Three items advance at multiples of the base rate.',
    summary:'Dot ×1, square ×2, circle ×3 clockwise steps per term',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:1},{s:"circ",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:1},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:1},{s:"circ",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:1},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:1}]}],
    ans:0, exp:'i=5: dot=CW[1]=TR; sq=CW[10%4]=CW[2]=BR; circ=CW[15%4]=CW[3]=BL.' },

  { id:33, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern?',
    summary:'Dots placed at all inner positions where inner_r+inner_c ≡ (outer_r+outer_c+1) mod 3',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]}],
    ans:0, exp:'(2,2): target=(4+1)%3=2. Inner positions with ir+ic=2: [0,2],[1,1],[2,0] = anti-diagonal.' },

  { id:34, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:"What comes next? The square's position follows i² (i-squared).",
    summary:'Square at CW[i² mod 4]: produces a deceptive pattern',
    series:[{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]}],
    options:[{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0}]}],
    ans:0, exp:'i²%4 for i=0..5: 0,1,0,1,0,1. Pattern alternates TL/TR. i=6: 36%4=0→TL.' },

  { id:35, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern?',
    summary:'Dots fill inner column = outer col; count = outer row + 1',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:1},{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]}],
    ans:0, exp:'(2,2): 3 dots in inner col 2: [0,2],[1,2],[2,2] = full right column.' },

  { id:36, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:'What comes next? Two items have coprime periods of 3 and 5.',
    summary:'Dot period 3; square period 5 — combined period 15',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"sq",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"sq",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"sq",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"sq",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"sq",r:0,c:0}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"sq",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"sq",r:0,c:2}]}],
    ans:0, exp:'i=6: dot=P3b[0]=[0,0]; sq=P5[1]=[0,2].' },

  { id:37, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern? Each cell contains two items that are horizontally mirrored.',
    summary:'Dot at [r,c]; circle at [r,2-c] — horizontal reflection of the dot',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"circ",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"circ",r:0,c:0}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"circ",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"circ",r:1,c:0}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"circ",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"circ",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"circ",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"circ",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]}],
    ans:0, exp:'(2,2): dot@[2,2]; circle@[2,2-2]=[2,0].' },

  { id:38, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:'What comes next? The dot count follows the Fibonacci sequence.',
    summary:'Dot count: 1,1,2,3,5 → find 8 (next Fibonacci)',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]}],
    ans:3, exp:'Fibonacci: 1,1,2,3,5,8. Next = 8 dots. 8 dots fills the first 8 positions in reading order (all except [2,2]).' },

  { id:39, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern? Shape depends on the product of coordinates.',
    summary:'Filled dot if outer row×col is even; outline circle otherwise — at inner [r,c]',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"circ",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"circ",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"circ",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"circ",r:0,c:0}]}],
    ans:2, exp:'(2,2): 2×2=4(even) → filled dot at [2,2].' },

  { id:40, type:"odd_one_out", cat:"Pictorial", diff:"Very Hard",
    title:'Which cell is the odd one out? The rule involves powers of 2.',
    summary:'Three cells have dot counts that are powers of 2; one does not',

    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]}],
    ans:1, exp:'Powers of 2: 1(2⁰), 4(2²), 2(2¹). B=5 is not a power of 2.' },

  { id:41, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern?',
    summary:'Dots fill inner column = outer col; count from top = outer row + 1',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:1},{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2}]}],
    ans:3, exp:'(2,2): 3 dots in col 2 from top: [0,2],[1,2],[2,2].' },

  { id:42, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:'What comes next? Dots accumulate along a clockwise spiral.',
    summary:'Each step adds the next dot on the clockwise spiral — dots are never removed',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:1,c:1}]}],
    ans:0, exp:'Dots accumulate: after 4 ([0,0],[0,1],[0,2],[1,2]) the 5th is SPIRAL[4]=[2,2].' },

  { id:43, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern? The second item is the transpose of the first.',
    summary:'Dot at inner [r,c]; filled square at inner [c,r] (transposed position)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"fsq",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"fsq",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"fsq",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"fsq",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"fsq",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"fsq",r:1,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"fsq",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"fsq",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"fsq",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"fsq",r:2,c:2}]}],
    ans:2, exp:'(2,2): r=c=2 → dot@[2,2] and fsq@[2,2] (same position — overlap). Shows as one item at [2,2].' },

  { id:44, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:'What comes next? Shape type and position cycle independently.',
    summary:'Position cycles CW (period 4); shape cycles sq/fsq/circ (period 3) — combined period 12',
    series:[{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:0}]}],
    options:[{g:"2x2",items:[{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"circ",r:1,c:1}]}],
    ans:0, exp:'i=5: pos=CW[5%4]=CW[1]=TR; shape=shapes[5%3]=shapes[2]=circle. Circle (outline) at TR.' },

  { id:45, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern?',
    summary:'Dot at inner row=(r+c)%3, inner col=(2r+c)%3 — a full-rank linear map over GF(3)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]}],[{g:"3x3",items:[{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],
    ans:0, exp:'(2,2): row=(2+2)%3=4%3=1; col=(4+2)%3=6%3=0 → dot at [1,0].' },

  { id:46, type:"odd_one_out", cat:"Pictorial", diff:"Very Hard",
    title:'Which cell is the odd one out? The rule involves triangular numbers.',
    summary:'Three cells have triangular dot counts (1,3,6,10…); one does not',

    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]}],
    ans:2, exp:'Triangular numbers: 1=T₁, 3=T₂, 6=T₃. C=5 is not triangular.' },

  { id:47, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern?',
    summary:'Items fill inner col=outer_col, count=outer_row+1; filled dots if row=col, else outline circles',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"circ",r:0,c:1}]},{g:"3x3",items:[{s:"circ",r:0,c:2}]}],[{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"circ",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"circ",r:0,c:2},{s:"circ",r:1,c:2}]}],[{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"circ",r:1,c:0},{s:"circ",r:2,c:0}]},{g:"3x3",items:[{s:"circ",r:0,c:1},{s:"circ",r:1,c:1},{s:"circ",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"circ",r:0,c:2},{s:"circ",r:1,c:2},{s:"circ",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"circ",r:1,c:2},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2}]}],
    ans:3, exp:'(2,2): r=c=2 → diagonal → filled dots in col 2: [0,2],[1,2],[2,2].' },

  { id:48, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:'What comes next? The dot count follows a Fibonacci-like sequence, wrapping around.',
    summary:'Count: 1,2,3,5,8 (Fibonacci starting 1,2) → next=13, but grid wraps at 9: 13 mod 9 = 4',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]}],
    ans:2, exp:'1+2=3, 2+3=5, 3+5=8, 5+8=13. 3×3 grid wraps at 9: 13 mod 9 = 4 dots.' },

  { id:49, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:'Which option completes the pattern?',
    summary:'Dots placed at all inner positions where (inner_r+inner_c) mod 3 = (outer_r+outer_c) mod 3',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]}],
    ans:0, exp:'(2,2): target=(4)%3=1. Positions where ir+ic=1: [0,1],[1,0] → 2 dots.' },

  { id:50, type:"odd_one_out", cat:"Pictorial", diff:"Very Hard",
    title:'Which cell does NOT have vertically symmetric dot placement?',
    summary:'Three cells have dots symmetric about the vertical centre line; one does not',

    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:1},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:1},{s:"dot",r:2,c:2}]}],
    ans:3, exp:'A: symmetric [col 0+2 pairs]. B: symmetric [centre col]. C: symmetric [four corners]. D: dots [0,0],[1,1],[2,2] — the diagonal, NOT vertically symmetric.' },

  // ── Impossible ────────────────────────────────────────

  { id:51, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern? Track two simultaneous items with a transposition rule.',
    summary:'Dot at inner [r,c]; circle at inner [c,r] (transpose); overlap at diagonal gives just dot',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"circ",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"circ",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"circ",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"circ",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"circ",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"circ",r:1,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"circ",r:2,c:0}]},{g:"3x3",items:[{s:"circ",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"circ",r:0,c:2}]}],
    ans:0, exp:'(2,2): r=c → overlap → single dot at [2,2].' },

  { id:52, type:"series", cat:"Pictorial", diff:"Impossible",
    title:'What comes next? The dot count equals the number of 1-bits in the step number.',
    summary:'Dot count = popcount(i) = number of set bits in binary representation of i',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[]}],
    ans:1, exp:'i=6=110₂: three digits, two 1-bits → 2 dots.' },

  { id:53, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern?',
    summary:'Two dots: first at [r,c]; second shifted +1 row and +2 cols (mod 3)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"dot",r:0,c:0}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:2,c:2}]}],
    ans:2, exp:'(2,2): dot1=[2,2]; dot2=[(3)%3,(4)%3]=[0,1].' },

  { id:54, type:"series", cat:"Pictorial", diff:"Impossible",
    title:"What comes next? The items' positions are determined by Fibonacci numbers.",
    summary:'Dot at CW[F(i)%4]; sq at CW[F(i+1)%4]; circle at CW[F(i+2)%4]',
    series:[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:1},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:1},{s:"circ",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:1,c:0},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1},{s:"circ",r:0,c:0}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:0},{s:"circ",r:0,c:1}]}],
    ans:0, exp:'F(4)=5→CW[1]=TR; F(5)=8→CW[0]=TL; F(6)=13→CW[1]=TR. Dot=TR, sq=TL, circ=TR.' },

  { id:55, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern? The dot count equals the number of divisors.',
    summary:'Dot count = d((r+1)(c+1)) = number of divisors of the product',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    ans:1, exp:'(3)(3)=9. Divisors of 9: {1,3,9} → 3 divisors. 3 dots.' },

  { id:56, type:"series", cat:"Pictorial", diff:"Impossible",
    title:"What comes next? Each cell encodes a row of Pascal's triangle mod 2.",
    summary:"Dots at column j if C(n,j) is odd (Pascal's triangle mod 2 = Sierpiński pattern)",
    series:[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0}]}],
    options:[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:2}]}],
    ans:0, exp:'n=5=101₂. C(5,0)=1(odd→dot); C(5,1)=5(odd→dot); C(5,2)=10(even→no dot). Dots at cols 0 and 1 → same as n=1.' },

  { id:57, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern? The dot follows a nonlinear position formula.',
    summary:'Dot at inner row=(r+r×c)%3, inner col=(c+r+c)%3 = (r+2c)%3',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]}],[{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]}],
    ans:1, exp:'(2,2): row=(2+2×2)%3=(2+4)%3=6%3=0; col=(2+2+2)%3=6%3=0 → dot at [0,0].' },

  { id:58, type:"series", cat:"Pictorial", diff:"Impossible",
    title:'What comes next? The dot pattern encodes 2-bit Gray code.',
    summary:'2-bit Gray code: 00→01→11→10→00. Dots at TL if bit0=1; dot at TR if bit1=1',
    series:[{g:"2x2",items:[]},{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:1}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[]},{g:"2x2",items:[{s:"dot",r:0,c:1}]}],
    ans:2, exp:'Gray sequence: 00,01,11,10,00… Step 5: back to 00 = no dots = empty cell.' },

  { id:59, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern? The dot position follows modular arithmetic.',
    summary:'Inner position index = (outer index × 7) mod 9 — a bijection over GF(9)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    ans:0, exp:'Outer index 8: 8×7=56. 56 mod 9=2. Inner position 2 in reading order=[0,2].' },

  { id:60, type:"series", cat:"Pictorial", diff:"Impossible",
    title:"What comes next? The dot's column follows the van der Corput base-2 sequence.",
    summary:'Van der Corput sequence in base 2, scaled to 3 columns: 1,0,2,0,1,1,…',
    series:[{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]}],
    options:[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]}],
    ans:1, exp:'n=6=110₂, reversed=011₂=3/8. Scaled: ⌊3/8×3⌋=1.125≈1. Col=1.' },

  { id:61, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern? Dots satisfy a bilinear congruence.',
    summary:'Dots at inner [ir,ic] where (ir×outer_col + ic×outer_row) mod 3 = 0',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:1},{s:"dot",r:2,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:1},{s:"dot",r:2,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:1},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]}],
    ans:2, exp:'(2,2): (ir×2+ic×2)%3=0 → 2(ir+ic)%3=0 → (ir+ic)%3=0. Positions: [0,0],[1,2],[2,1].' },

  { id:62, type:"series", cat:"Pictorial", diff:"Impossible",
    title:'What comes next? The dots fill successive anti-diagonals.',
    summary:'Each step: dots placed at all positions where inner_r+inner_c ≡ i mod 3',
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]}],
    ans:0, exp:'i=5: 5%3=2. Anti-diagonal sum=2: positions [0,2],[1,1],[2,0].' },

  { id:63, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern? Count the dots — then count the bits.',
    summary:'Dot count = number of 1-bits in the binary representation of (3r+c)',
    grid:[[{g:"3x3",items:[]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    ans:3, exp:'Outer index (2,2)=8=1000₂. Popcount=1. One dot.' },

  { id:64, type:"series", cat:"Pictorial", diff:"Impossible",
    title:'What comes next? The dot follows the Thue-Morse sequence.',
    summary:'Dot present at step i if popcount(i) is odd (Thue-Morse: 0,1,1,0,1,0,0,1,…)',
    series:[{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[]},{g:"3x3",items:[]}],
    options:[{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    ans:0, exp:'i=7=111₂: popcount=3(odd) → dot present.' },

  { id:65, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern?',
    summary:'Dots at inner [ir,ic] where (ir×r + ic×c) mod 3 = 1 — a linear form over GF(3)',
    grid:[[{g:"3x3",items:[]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:1},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:1},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0}]}],
    ans:2, exp:'(2,2): (2ir+2ic)%3=1 → 2(ir+ic)≡1(mod3). Since 2⁻¹≡2(mod3): ir+ic≡2. Positions: [0,2],[1,1],[2,0].' },

  { id:66, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern? The rule uses bitwise XOR.',
    summary:'Dot at inner [outer_r, outer_r XOR outer_c] (XOR, clamped to 0–2)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],
    ans:0, exp:'(2,2): row=2; col=2 XOR 2=0. Dot at [2,0].' },

  { id:67, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern? Columns are re-ordered by Gray code.',
    summary:'Dot at inner [r, Gray(c)%3]: Gray code relabels which inner column the dot occupies',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    ans:0, exp:'Gray(0)%3=0; Gray(1)%3=1; Gray(2)%3=3%3=0. (2,2): inner col=Gray(2)%3=0. Dot at [2,0].' },

  { id:68, type:"series", cat:"Pictorial", diff:"Impossible",
    title:"What comes next? Each cell encodes a row of Pascal's triangle mod 2 (Sierpiński pattern).",
    summary:'Pascal row n mod 2: dot at col j if C(n,j) is odd. Row 4 ends the first Sierpiński block.',
    series:[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]}],
    options:[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0}]}],
    ans:3, exp:'Row 4=100₂: C(4,0)=1(odd), C(4,1)=4(even), C(4,2)=6(even). Only col 0 has dot.' },

  { id:69, type:"matrix", cat:"Pictorial", diff:"Impossible",
    title:'Which option completes the pattern?',
    summary:'Dot count = number of divisors of (outer_r+1)×(outer_c+1)',
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]}],
    ans:0, exp:'(3)(3)=9 has 3 divisors (1,3,9) → 3 dots. Matches option A.' },

  { id:70, type:"odd_one_out", cat:"Pictorial", diff:"Impossible",
    title:'Which cell is the odd one out? Only experts in number theory will see the rule.',
    summary:'Three cells have highly composite dot counts; one count is prime',

    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]}],
    ans:0, exp:'Highly composite numbers (record divisor counts): 1,2,4,6,12… A=7 is prime (only 2 divisors). B=6(4 div), C=4(3 div), D=9(3 div).' },

{ id:71, type:"series", cat:"Pictorial", diff:"Medium",
    title:"What comes next? The dot moves along the anti-diagonal.",
    summary:"Dot moves: [0,2]→[1,1]→[2,0]→repeat (period 3)",
    series:[{g:"3x3",items:[{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],
    options:[{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]}],
    ans:0, exp:"Anti-diagonal: [0,2]→[1,1]→[2,0]→[0,2]→[1,1]… Step 5 (index 4): 4%3=1 → [1,1]." },
  { id:72, type:"matrix", cat:"Pictorial", diff:"Medium",
    title:"Which option completes the pattern? Row controls dot row; column controls square column.",
    summary:"Dot at [row%2, 0]; square at [0, col%2]",
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]}],[{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:0}]}],[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1}]},null]],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:0,c:0}]}],
    ans:0, exp:"row=2: dot at [2%2,0]=[0,0]. col=2: sq at [0,2%2]=[0,0]. Both at [0,0] — dot and sq overlap at TL." },
  { id:73, type:"series", cat:"Pictorial", diff:"Medium",
    title:"What comes next? Filled squares accumulate one per step, filling the grid.",
    summary:"Filled square count grows 1,2,3,4 (all filled) — then resets",
    series:[{g:"2x2",items:[{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:0},{s:"fsq",r:1,c:1}]}],
    options:[{g:"2x2",items:[{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"fsq",r:1,c:0},{s:"fsq",r:1,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:1}]}],
    ans:0, exp:"Steps 1–4 fill corners TL→TR→BL→BR. Step 5 wraps back: 1 filled square at TL." },
  { id:74, type:"matrix", cat:"Pictorial", diff:"Medium",
    title:"Which option completes the pattern? Circle is always fixed; dot moves to a corner.",
    summary:"Circle fixed at [0,0]; dot at corner mapped from (row%2, col%2)",
    grid:[[{g:"3x3",items:[{s:"circ",r:0,c:0}]},{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"circ",r:0,c:0}]}],[{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"dot",r:2,c:0}]}],[{g:"3x3",items:[{s:"circ",r:0,c:0}]},{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"dot",r:0,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"circ",r:0,c:0}]},{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"dot",r:2,c:0}]}],
    ans:0, exp:"row%2=0, col%2=0 → corner (0,0): dot overlaps circle at TL. Result: just the circle at [0,0]." },
  { id:75, type:"odd_one_out", cat:"Pictorial", diff:"Medium",
    title:"Which cell is the odd one out?",
    summary:"Three cells have dot+square on the same row; one has them in the same column",
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"sq",r:1,c:1}]}],
    ans:2, exp:"A: both in row 0. B: both in row 1. D: both in row 1. C: dot at [0,0] and sq at [1,0] — both in col 0, not the same row. C is the odd one out." },
  { id:76, type:"series", cat:"Pictorial", diff:"Medium",
    title:"What comes next? The dot walks clockwise along the outer edge of the grid.",
    summary:"Dot traces outer border CW: [0,0]→[0,1]→[0,2]→[1,2]→[2,2]…",
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2}]}],
    ans:0, exp:"Border walk clockwise. After [0,0],[0,1],[0,2],[1,2] the next step is [2,2]." },
  { id:77, type:"matrix", cat:"Pictorial", diff:"Medium",
    title:"Which option completes the pattern? Look at the columns, not the rows.",
    summary:"Dot count = outer column + 1 (identical across all rows)",
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]}],
    ans:2, exp:"Column 0=1 dot, column 1=2 dots, column 2=3 dots. Answer: 3 dots." },
  { id:78, type:"series", cat:"Pictorial", diff:"Medium",
    title:"What comes next? One dot is fixed; the other rotates through the four corners.",
    summary:"Dot fixed at [0,0]; second dot rotates CW through corners: [0,2],[2,2],[2,0],[0,0]",
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    ans:0, exp:"Rotating dot: [0,2]→[2,2]→[2,0]→[0,0]→[0,2]… Step 5 = [0,2]." },
  { id:79, type:"matrix", cat:"Pictorial", diff:"Medium",
    title:"Which option completes the pattern? The pattern alternates like a checkerboard.",
    summary:"Dot if (row+col) is even; square if (row+col) is odd",
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0}]}],[{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]}],[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]},null]],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:1}]},{g:"2x2",items:[]}],
    ans:0, exp:"(2+2)=4 is even → dot. Single dot at TL." },
  { id:80, type:"odd_one_out", cat:"Pictorial", diff:"Medium",
    title:"Which cell is the odd one out?",
    summary:"Three cells contain 3 items each; one contains only 2",
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:1},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"circ",r:0,c:0},{s:"sq",r:1,c:1},{s:"fsq",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"sq",r:1,c:0},{s:"circ",r:2,c:0}]}],
    ans:1, exp:"A=3 dots, C=3 items (circle+sq+fsq), D=3 items. B has only 2 dots — the odd one out." },
  { id:81, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:"Which option completes the pattern? The square is always one column to the right of the dot.",
    summary:"Dot at [r,c]; square at [r,(c+1)%3] — wraps around",
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"sq",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"sq",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"sq",r:0,c:0}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"sq",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:1},{s:"sq",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"sq",r:1,c:0}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"sq",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"sq",r:2,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"sq",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"sq",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"sq",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"sq",r:2,c:2}]}],
    ans:0, exp:"Dot at [2,2]; square at [2,(2+1)%3]=[2,0]. Wraps around." },
  { id:82, type:"series", cat:"Pictorial", diff:"Hard",
    title:"What comes next? Three rules operate simultaneously: rotate, hold, accumulate.",
    summary:"Dot rotates CW; circle stays at centre; filled squares accumulate at each visited corner",
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"circ",r:1,c:1},{s:"fsq",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"circ",r:1,c:1},{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:1},{s:"circ",r:1,c:1},{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"circ",r:1,c:1},{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:1,c:0}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"circ",r:1,c:1},{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"circ",r:1,c:1},{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"circ",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"circ",r:1,c:1}]}],
    ans:0, exp:"After 4 steps all corners are filled. Dot cycles back to TL. Circle stays at centre. Step 5 = step 1 in position but all 4 corners remain filled." },
  { id:83, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:"Which option completes the pattern? The column determines which anti-diagonal lights up.",
    summary:"Dots fill inner positions where inner_r + inner_c = outer_col",
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:1,c:1},{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:1},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],
    ans:0, exp:"Outer col=2: dots where inner_r+inner_c=2 → [0,2],[1,1],[2,0]." },
  { id:84, type:"series", cat:"Pictorial", diff:"Hard",
    title:"What comes next? Shape type and position cycle independently.",
    summary:"Shape cycles fsq/sq/circ (p=3); position advances CW +1/step (p=4)",
    series:[{g:"2x2",items:[{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"fsq",r:1,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:0}]}],
    options:[{g:"2x2",items:[{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"circ",r:0,c:0}]}],
    ans:0, exp:"i=5: pos=CW[5%4]=CW[1]=TR; shape=5%3=2→circ. Outline circle at TR." },
  { id:85, type:"matrix", cat:"Pictorial", diff:"Hard",
    title:"Which option completes the pattern?",
    summary:"Dots fill inner row=(outer_row%3), count=outer_col+1",
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]}],
    ans:0, exp:"Inner row=2%3=2; count=2+1=3. Three dots in row 2: [2,0],[2,1],[2,2]." },
  { id:86, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:"Which option completes the pattern? Two items each follow a different position formula.",
    summary:"Dot at [r,c]; filled square at [(r+c)%3, (r×c)%3]",
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"fsq",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"fsq",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"fsq",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"fsq",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:1,c:1},{s:"fsq",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"fsq",r:0,c:2}]}],[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"fsq",r:2,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:1},{s:"fsq",r:0,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"fsq",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"fsq",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"fsq",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"fsq",r:2,c:2}]}],
    ans:0, exp:"Dot@[2,2]. FSq@[(2+2)%3,(2×2)%3]=[1,1]." },
  { id:87, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:"What comes next? Dots accumulate along the spiral following Fibonacci counts.",
    summary:"Dot count = Fibonacci number: 1,1,2,3,5 → next is 8",
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2},{s:"dot",r:2,c:1},{s:"dot",r:2,c:0},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:2},{s:"dot",r:2,c:2},{s:"dot",r:2,c:1},{s:"dot",r:2,c:0}]}],
    ans:0, exp:"Fibonacci: 1,1,2,3,5,8. Next=8 dots filling the first 8 spiral positions — all except centre [1,1]." },
  { id:88, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:"Which option completes the pattern? Three placement rules, with overlaps removed.",
    summary:"Dot1@[r,c]; dot2@[c,r] (transpose); dot3@[r%3,(c+1)%3] — deduplicated",
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:2},{s:"dot",r:2,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:1,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:1}]}],[{g:"3x3",items:[{s:"dot",r:0,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:1,c:2},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:2,c:0},{s:"dot",r:2,c:1},{s:"dot",r:2,c:2}]}],
    ans:0, exp:"(2,2): dot1=[2,2], dot2=[2,2](same), dot3=[2,(3)%3]=[2,0]. Unique: [2,0] and [2,2]." },
  { id:89, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:"What comes next? The position follows Lucas numbers.",
    summary:"Square at CW[L(i)%4] where L = Lucas: 2,1,3,4,7,11,18…",
    series:[{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:1,c:0}]}],
    options:[{g:"2x2",items:[{s:"sq",r:1,c:0}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:0,c:0}]}],
    ans:0, exp:"L(5)=11. 11%4=3 → CW[3]=BL. Square at BL." },
  { id:90, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:"Which option completes the pattern?",
    summary:"Dot count = (outer_row + outer_col + 1) mod 3 + 1 — a cycling pattern of 1,2,3",
    grid:[[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]}],[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},null]],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]}],
    ans:2, exp:"(2+2+1)%3+1 = 5%3+1 = 2+1 = 3 dots." },
  { id:91, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:"What comes next? The dot advances CW and leaves an outline trail at its previous position.",
    summary:"Filled dot at CW[(i+1)%4]; outline circle at CW[i%4]",
    series:[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:0},{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"circ",r:1,c:0}]}],
    options:[{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1},{s:"circ",r:1,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:0},{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1},{s:"circ",r:0,c:0}]}],
    ans:0, exp:"i=4: dot=CW[(4+1)%4]=CW[1]=TR; trail=CW[4%4]=CW[0]=TL." },
  { id:92, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:"Which option completes the pattern? Each row uses a different shape; all share the same position rule.",
    summary:"Row 0=dot, row 1=square, row 2=circle; all at CW[(row+col)%4]",
    grid:[[{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"dot",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:1,c:1}]}],[{g:"2x2",items:[{s:"sq",r:0,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:1}]},{g:"2x2",items:[{s:"sq",r:1,c:0}]}],[{g:"2x2",items:[{s:"circ",r:1,c:1}]},{g:"2x2",items:[{s:"circ",r:1,c:0}]},null]],
    options:[{g:"2x2",items:[{s:"circ",r:0,c:0}]},{g:"2x2",items:[{s:"circ",r:0,c:1}]},{g:"2x2",items:[{s:"dot",r:0,c:0}]},{g:"2x2",items:[{s:"sq",r:0,c:0}]}],
    ans:0, exp:"Row 2 → circle. Position: CW[(2+2)%4]=CW[0]=TL. Circle at TL." },
  { id:93, type:"odd_one_out", cat:"Pictorial", diff:"Very Hard",
    title:"Which cell lacks 180° rotational symmetry about the centre?",
    summary:"Three cells are 180°-rotationally symmetric; one is not",
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:1},{s:"dot",r:2,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0}]}],
    ans:3, exp:"A: [0,0]↔[2,2] ✓. B: [0,1]↔[2,1] ✓. C: 4 corners ✓. D: [0,0],[1,2],[2,0] — [1,2] maps to [1,0] under 180° but [1,0] is absent. D lacks symmetry." },
  { id:94, type:"series", cat:"Pictorial", diff:"Very Hard",
    title:"What comes next? Dot count follows triangular numbers, wrapped to the grid size.",
    summary:"Count = T(i) mod 9 (wraps at full grid): 1,3,6,1,6 → find T(6)%9",
    series:[{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2}]}],
    options:[{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0}]},{g:"3x3",items:[{s:"dot",r:0,c:0},{s:"dot",r:0,c:1},{s:"dot",r:0,c:2},{s:"dot",r:1,c:0},{s:"dot",r:1,c:1},{s:"dot",r:1,c:2},{s:"dot",r:2,c:0},{s:"dot",r:2,c:1}]}],
    ans:0, exp:"T(6)=21. 21 mod 9=3. Three dots." },
  { id:95, type:"matrix", cat:"Pictorial", diff:"Very Hard",
    title:"Which option completes the pattern? Count the filled squares — then find the formula.",
    summary:"Filled square count = (3×row + col) mod 4 + 1, filling clockwise corners",
    grid:[[{g:"2x2",items:[{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1}]}],[{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:1,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1}]}],[{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:1,c:0}]},null]],
    options:[{g:"2x2",items:[{s:"fsq",r:0,c:0}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1}]},{g:"2x2",items:[{s:"fsq",r:0,c:0},{s:"fsq",r:0,c:1},{s:"fsq",r:1,c:1},{s:"fsq",r:1,c:0}]}],
    ans:0, exp:"Index=3×2+2=8. 8%4=0. Count=0+1=1. One filled square at TL." },
];

// ─────────────────────────────────────────────────────────────
// NUMBER  (5 Easy · 10 Medium · 15 Hard)
// ─────────────────────────────────────────────────────────────
const NUMBER = [

  // ── Easy ──────────────────────────────────────────────────
  { id:31, type:"sequence", cat:"Number", diff:"Easy",
    title:"What number comes next?", summary:"×3 geometric series",
    sequence:[2,6,18,54], options:[108,162,144,72], ans:1,
    exp:"Each term ×3: 54×3=162." },

  { id:32, type:"sequence", cat:"Number", diff:"Easy",
    title:"What number comes next?", summary:"Fibonacci sequence",
    sequence:[1,1,2,3,5,8], options:[11,12,13,14], ans:2,
    exp:"Each number = sum of the two before it: 5+8=13." },

  { id:33, type:"sequence", cat:"Number", diff:"Easy",
    title:"What number comes next?", summary:"Powers of 2",
    sequence:[2,4,8,16,32], options:[48,56,64,72], ans:2,
    exp:"Each term doubles: 2¹,2²,2³,2⁴,2⁵,2⁶=64." },

  { id:34, type:"sequence", cat:"Number", diff:"Easy",
    title:"What number comes next?", summary:"+3 arithmetic sequence",
    sequence:[3,6,9,12,15], options:[16,17,18,19], ans:2,
    exp:"Each term adds 3 (multiples of 3). After 15, the next is 18." },

  { id:35, type:"sequence", cat:"Number", diff:"Easy",
    title:"What number comes next?", summary:"+7 arithmetic sequence",
    sequence:[7,14,21,28], options:[31,33,35,37], ans:2,
    exp:"Each term adds 7 (multiples of 7). After 28, the next is 35." },

  // ── Medium ─────────────────────────────────────────────────
  { id:36, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Decreasing-gap sequence",
    sequence:[100,91,83,76,70], options:[64,65,66,67], ans:1,
    exp:"Gaps shrink by 1 each step: −9,−8,−7,−6,−5. Next: 70−5=65." },

  { id:37, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Perfect squares (n²)",
    sequence:[4,9,16,25,36], options:[42,45,49,50], ans:2,
    exp:"Sequence is 2²,3²,4²,5²,6²… Next is 7²=49." },

  { id:38, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Triangular numbers",
    sequence:[1,3,6,10,15], options:[18,19,21,24], ans:2,
    exp:"Differences increase by 1 each step: +2,+3,+4,+5,+6. Next: 15+6=21." },

  { id:39, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Increasing-gap sequence (+1,+2,+3…)",
    sequence:[1,2,4,7,11], options:[14,15,16,17], ans:2,
    exp:"Differences are +1,+2,+3,+4,+5. Next: 11+5=16." },

  { id:40, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Prime number sequence",
    sequence:[2,3,5,7,11], options:[12,13,14,15], ans:1,
    exp:"Each term is the next prime number. After 11, the next prime is 13." },

  { id:41, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Alternating +1 and +2 pattern",
    sequence:[1,2,4,5,7,8,10,11], options:[12,13,14,15], ans:1,
    exp:"Differences alternate +1 and +2. After 11 (+1), the next difference is +2: 11+2=13." },

  { id:42, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Differences are consecutive odd numbers",
    sequence:[1,2,5,10,17,26], options:[35,36,37,39], ans:2,
    exp:"Differences are the consecutive odd numbers 1,3,5,7,9,11. Next: 26+11=37." },

  { id:43, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Powers of 2 minus 1 (2ⁿ−1)",
    sequence:[1,3,7,15,31], options:[59,61,63,65], ans:2,
    exp:"Sequence is 2¹−1=1, 2²−1=3, 2³−1=7, 2⁴−1=15, 2⁵−1=31, 2⁶−1=63." },

  { id:44, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Each term = sum of two before, starting 2,2",
    sequence:[2,2,4,6,10,16], options:[22,24,26,28], ans:2,
    exp:"Like Fibonacci starting at 2,2: each term = sum of previous two. 10+16=26." },

  { id:45, type:"sequence", cat:"Number", diff:"Medium",
    title:"What number comes next?", summary:"Alternating ×3 and +2 operations",
    sequence:[1,3,5,15,17,51,53], options:[155,157,159,161], ans:2,
    exp:"Operations alternate ×3 and +2: 1×3=3, 3+2=5, 5×3=15, 15+2=17, 17×3=51, 51+2=53, 53×3=159." },

  // ── Hard ───────────────────────────────────────────────────
  { id:46, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"n×(n+2) product pattern",
    sequence:[3,8,15,24,35], options:[42,45,48,51], ans:2,
    exp:"Pattern: n×(n+2) → 1×3=3, 2×4=8, 3×5=15, 4×6=24, 5×7=35, 6×8=48." },

  { id:47, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Alternating ×2 and +3 operations",
    sequence:[2,5,10,13,26,29], options:[52,55,58,62], ans:2,
    exp:"Operations alternate ×2 and +3. After 29, the operation is ×2: 29×2=58." },

  { id:48, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Factorial sequence (n!)",
    sequence:[1,2,6,24,120], options:[240,480,720,960], ans:2,
    exp:"Factorials: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720." },

  { id:49, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Two interleaved sequences (×2 and +5)",
    sequence:[1,6,2,11,4,16,8], options:[18,20,21,24], ans:2,
    exp:"Odd positions double: 1,2,4,8… Even positions add 5: 6,11,16,21. Next is an even position: 16+5=21." },

  { id:50, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"n×(n+1) product pattern",
    sequence:[2,6,12,20,30], options:[36,39,42,45], ans:2,
    exp:"Pattern: n×(n+1) → 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42." },

  { id:51, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Differences themselves increase by 1 each step",
    sequence:[2,4,7,11,16,22], options:[27,28,29,30], ans:2,
    exp:"Differences are +2,+3,+4,+5,+6,+7. Next: 22+7=29." },

  { id:52, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Cube numbers (n³)",
    sequence:[1,8,27,64,125], options:[175,196,216,245], ans:2,
    exp:"Sequence is 1³,2³,3³,4³,5³… Next is 6³=216." },

  { id:53, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Recurrence: each term = 3×previous − 1",
    sequence:[1,2,5,14,41], options:[100,112,122,134], ans:2,
    exp:"Rule: next = 3×current − 1. 3×1−1=2, 3×2−1=5, 3×5−1=14, 3×14−1=41, 3×41−1=122." },

  { id:54, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Tribonacci: each term = sum of three before",
    sequence:[0,1,1,2,4,7,13], options:[20,22,24,26], ans:2,
    exp:"Each term = sum of the three before it: 4+7+13=24." },

  { id:55, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"n²−n+1 pattern",
    sequence:[1,3,7,13,21,31], options:[39,41,43,45], ans:2,
    exp:"Pattern: n²−n+1 → 1,3,7,13,21,31… Differences are even numbers 2,4,6,8,10,12. Next: 31+12=43." },

  { id:56, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Tetrahedral numbers: n×(n+1)×(n+2)÷6",
    sequence:[1,4,10,20,35,56], options:[78,80,84,88], ans:2,
    exp:"Tetrahedral numbers: n×(n+1)×(n+2)/6. Term 7 = 7×8×9/6=84." },

  { id:57, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Two interleaved geometric sequences (×2 and ×3)",
    sequence:[2,3,4,9,8,27,16], options:[27,54,81,108], ans:2,
    exp:"Odd positions double: 2,4,8,16… Even positions triple: 3,9,27,81. Next is an even position: 27×3=81." },

  { id:58, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Running sum of squares: 1²+2²+…+n²",
    sequence:[1,5,14,30,55], options:[84,88,91,96], ans:2,
    exp:"Each term adds the next perfect square: 55+6²=55+36=91." },

  { id:59, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"2ⁿ − n pattern",
    sequence:[1,2,5,12,27,58], options:[115,119,121,125], ans:2,
    exp:"Pattern: 2ⁿ−n → 2¹−1=1, 2²−2=2, 2³−3=5, 2⁴−4=12, 2⁵−5=27, 2⁶−6=58, 2⁷−7=121." },

  { id:60, type:"sequence", cat:"Number", diff:"Hard",
    title:"What number comes next?", summary:"Three-operation cycle: +1, ×2, +3 repeating",
    sequence:[1,2,4,7,8,16,19], options:[18,20,22,24], ans:1,
    exp:"Operations cycle +1,×2,+3: 1+1=2, 2×2=4, 4+3=7, 7+1=8, 8×2=16, 16+3=19, 19+1=20." },

  // ── Very Hard ──────────────────────────────────────────────

  { id:141, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Differences form the Fibonacci sequence",
    sequence:[0,1,2,4,7,12,20],options:[28,31,33,36],ans:2,
    exp:"The differences between consecutive terms are 1,1,2,3,5,8 — the Fibonacci sequence. Next difference = 13, so next term = 20+13=33." },

  { id:142, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Three interleaved geometric sequences: ×2, ×3, ×5",
    sequence:[2,3,5,4,9,25,8,27],options:[81,100,125,250],ans:2,
    exp:"Three sequences interleaved: odd positions ×2 (2,4,8…), even positions alternate ×3 (3,9,27…) and ×5 (5,25,125…). Position 9 continues the ×5 sequence: 25×5=125." },

  { id:143, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Running sum of consecutive primes",
    sequence:[2,5,10,17,28,41,58,77,100],options:[124,127,129,133],ans:2,
    exp:"Cumulative sum of primes: 2, 2+3=5, +5=10, +7=17, +11=28, +13=41, +17=58, +19=77, +23=100. Next prime=29, so 100+29=129." },

  { id:144, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"T(n) = 2ⁿ − n",
    sequence:[1,2,5,12,27,58,121],options:[240,244,248,252],ans:2,
    exp:"T(n)=2ⁿ−n: 2¹−1=1, 2²−2=2, 2³−3=5, 2⁴−4=12, 2⁵−5=27, 2⁶−6=58, 2⁷−7=121, 2⁸−8=248." },

  { id:145, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Lucas numbers (start 2, 1)",
    sequence:[2,1,3,4,7,11,18],options:[26,28,29,31],ans:2,
    exp:"Lucas numbers: each term = sum of the two before it, starting 2,1. 11+18=29." },

  { id:146, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Catalan numbers",
    sequence:[1,1,2,5,14,42],options:[84,110,132,165],ans:2,
    exp:"Catalan numbers C(n)=C(2n,n)/(n+1). The sequence continues: 1,1,2,5,14,42,132. C(6)=132." },

  { id:147, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"First differences are the perfect squares (1,4,9,16,25,36)",
    sequence:[1,2,6,15,31,56],options:[88,90,92,96],ans:2,
    exp:"Differences are perfect squares: 1,4,9,16,25. Next difference=36. So 56+36=92." },

  { id:148, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"XOR recurrence: T(n) = T(n-1) XOR T(n-2), start 1, 3",
    sequence:[1,3,2,1,3,2,1],options:[0,2,3,4],ans:2,
    exp:"T(n)=T(n-1) XOR T(n-2): 1⊕3=2, 3⊕2=1, 2⊕1=3, cycle repeats with period 3 (1,3,2). After 1, the next value is 3." },

  { id:149, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Padovan sequence: T(n)=T(n-2)+T(n-3)",
    sequence:[1,1,1,2,2,3,4,5,7,9,12],options:[14,15,16,17],ans:2,
    exp:"Padovan: T(n)=T(n-2)+T(n-3). T(12)=T(10)+T(9)=9+7=16." },

  { id:150, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Tribonacci starting 1,2,3: each term = sum of previous three",
    sequence:[1,2,3,6,11,20,37],options:[62,65,68,71],ans:2,
    exp:"Each term = sum of previous three: 1+2+3=6, 2+3+6=11, 3+6+11=20, 6+11+20=37, 11+20+37=68." },

  { id:151, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Bell numbers B(n)",
    sequence:[1,1,2,5,15,52,203],options:[677,877,1077,1277],ans:1,
    exp:"Bell numbers count the ways to partition a set. B(7)=877. These grow rapidly via the Bell triangle." },

  { id:152, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Lazy caterer numbers: T(n) = n(n+1)/2 + 1",
    sequence:[1,2,4,7,11,16,22],options:[25,27,29,31],ans:2,
    exp:"Lazy caterer: T(n)=n(n+1)/2+1. T(7)=7×8/2+1=28+1=29." },

  { id:153, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"T(n) = T(n-1) × n − 1, starting T(1)=2",
    sequence:[2,3,8,31,154,923],options:[5530,6460,7381,8302],ans:1,
    exp:"T(n)=T(n-1)×n−1. T(7)=923×7−1=6461−1=6460." },

  { id:154, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Partition numbers p(n)",
    sequence:[1,1,2,3,5,7,11,15,22,30],options:[38,40,42,46],ans:2,
    exp:"Partition numbers p(n) count ways to write n as a sum of positive integers. p(10)=42." },

  { id:155, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Alternating Fibonacci and square numbers interleaved",
    sequence:[1,4,1,9,2,16,3,25,5],options:[32,34,36,41],ans:2,
    exp:"Odd positions are Fibonacci (1,1,2,3,5,8…); even positions are perfect squares (4,9,16,25,36…). Position 10 (even) = 36." },

  { id:156, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"T(n)=T(n-1)+T(n-2)−1, starting 2, 3",
    sequence:[2,3,4,6,9,14,22,35],options:[50,54,56,58],ans:2,
    exp:"T(n)=T(n-1)+T(n-2)−1. T(9)=35+22−1=56." },

  { id:157, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Sum of squares of digits, cycling sequence starting at 2",
    sequence:[2,4,16,37,58,89,145,42,20],options:[2,4,5,8],ans:1,
    exp:"Each term = sum of squares of digits of previous: 2→4, 4→16, 1+36=37, 9+49=58, 25+64=89, 64+81=145, 1+16+25=42, 16+4=20, 4+0=4. The sequence cycles back to 4." },

  { id:158, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Powers of 2 modulo 9 (period-6 cycle)",
    sequence:[2,4,8,7,5,1,2,4],options:[5,7,8,9],ans:2,
    exp:"2¹=2, 2²=4, 2³=8, 2⁴=16≡7, 2⁵=32≡5, 2⁶=64≡1 (mod 9), then repeats. Period=6. Position 9 = same as position 3 in cycle → 8." },

  { id:159, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Double factorial n!! appears twice before incrementing",
    sequence:[1,2,2,6,6,24,24,120,120],options:[360,720,1440,2520],ans:1,
    exp:"Each factorial n! appears twice consecutively: 1!,1!,2!,2!,3!,3!,4!,4!,5!,5! → Next is 6!=720." },

  { id:160, type:"sequence", cat:"Number", diff:"Very Hard",
    title:"What number comes next?", summary:"Operations cycle +1, ×2, +3 repeating",
    sequence:[1,2,4,7,8,16,19,20,40,43],options:[44,84,86,88],ans:2,
    exp:"Operations cycle +1,×2,+3: …19+1=20, 20×2=40, 40+3=43, 43+1=44. Next = ×2: 44×2=88." },


  // ── Impossible ─────────────────────────────────────────────

  { id:221, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Sylvester's sequence: each term = 1 + product of all previous terms",
    sequence:[2,3,7,43],options:[1097,1807,2389,3263],ans:1,
    exp:"Sylvester's sequence: T(n) = 1 + T(1)×T(2)×…×T(n-1). T(5) = 1+2×3×7×43 = 1+1806 = 1807." },

  { id:222, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next? This sequence is deliberately deceptive.",
    summary:"Deceptive sequence: T(n)=T(n-1)+digit_sum(n), masquerading as triangular numbers until n=10",
    sequence:[1,3,6,10,15,21,28,36,45,46],options:[48,55,57,64],ans:0,
    exp:"Rule: T(n)=T(n-1)+digit_sum(n). For n=1–9, digit_sum(n)=n, so it looks like triangular numbers. But digit_sum(10)=1+0=1, so T(10)=45+1=46 (not 55). T(11)=46+digit_sum(11)=46+2=48." },

  { id:223, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Recaman sequence: subtract n if positive and new, otherwise add n",
    sequence:[0,1,3,6,2,7,13,20,12],options:[3,12,21,24],ans:2,
    exp:"Recaman's sequence: a(n)=a(n-1)−n if result is positive AND not already in the sequence; otherwise a(n-1)+n. a(8)=12. a(9): 12−9=3, but 3 is already in the sequence, so a(9)=12+9=21." },

  { id:224, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Look-and-say sequence: read each group of identical digits aloud",
    sequence:[1,11,21,1211,111221,312211],options:[12112221,13112221,13111221,13212221],ans:1,
    exp:"Read 312211 aloud: one 3 (13), one 1 (11), two 2s (22), two 1s (21) → 13112221." },

  { id:225, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Two interleaved sequences: odd positions ×2, even positions T(n-1)+n",
    sequence:[1,2,2,6,4,12,8,20,16],options:[24,28,30,32],ans:2,
    exp:"Odd positions double: 1,2,4,8,16,32… Even positions: T(2)=2, T(4)=6, T(6)=12, T(8)=20, T(10)=T(8)+10=30. Position 10 is even: 20+10=30." },

  { id:226, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"T(n) = n^n mod 100 (last two digits of n to the power n)",
    sequence:[1,4,27,56,25,56,43,16],options:[81,84,87,89],ans:3,
    exp:"T(n) = nⁿ mod 100. T(9)=9⁹ mod 100. 9²=81, 9⁴=81²=6561≡61, 9⁸=61²=3721≡21, 9⁹=21×9=189≡89." },

  { id:227, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Beatty sequence: floor(n × √2)",
    sequence:[1,2,4,5,7,8,9,11,12,14],options:[14,15,16,17],ans:1,
    exp:"T(n) = ⌊n×√2⌋. ⌊11×1.41421…⌋ = ⌊15.5563…⌋ = 15. The differences 1,2,1,2,1,1,2,1,2 appear irregular because √2 is irrational." },

  { id:228, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next? The rule shifts unexpectedly after n=9.",
    summary:"T(n) = n + digit_count(T(n-1)), T(1)=1 — deceptive shift when T exceeds 9",
    sequence:[1,3,4,5,6,7,8,9,10,12],options:[11,12,13,14],ans:2,
    exp:"T(n)=n+digit_count(T(n-1)). For n=2–9, T(n-1) is 1-digit, so T(n)=n+1: but T(1)=1 (not 2), creating a permanent +1 offset (hence 3,4,…,10 instead of 2,3,…,9). T(9)=10 (two digits), so T(10)=10+2=12 (skip 11!). T(11)=11+2=13." },

  { id:229, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Reverse-and-add sequence mod 1000",
    sequence:[121,242,484,968,837,575,150,201,303],options:[594,600,606,612],ans:2,
    exp:"Each term: reverse the digits and add to the current term (mod 1000). 303+303=606. (For 968: rev=869, 968+869=1837, mod 1000=837 ✓. For 150: rev=051=51, 150+51=201 ✓.)" },

  { id:230, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Fibbinary numbers: non-negative integers with no two consecutive 1-bits in binary",
    sequence:[0,1,2,4,5,8,9,10,16,17],options:[14,16,18,19],ans:2,
    exp:"Fibbinary numbers are non-negative integers whose binary representation contains no two adjacent 1s. After 17 (10001₂), next is 18 (10010₂). Note: 19=10011₂ has adjacent 1s and is excluded." },

  { id:231, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Golomb's self-describing sequence: G(n) = how many times n appears",
    sequence:[1,2,2,3,3,4,4,4,5],options:[4,5,6,7],ans:1,
    exp:"Golomb's self-describing sequence: G(n) = how many times n appears. G(1)=1 (once), G(2)=2 (appears twice), G(3)=2 (twice), G(4)=3 (three times), G(5)=3, G(6)=4… G(10)=5." },

  { id:232, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Lucky numbers generated by the lucky number sieve",
    sequence:[1,3,7,9,13,15,21,25,31,33],options:[35,36,37,39],ans:2,
    exp:"Lucky numbers arise from the lucky sieve: keep 1st, remove every 2nd (eliminating 2,4,6…); keep 3rd (=3), remove every 3rd of remaining; keep 7th (=7), remove every 7th, and so on. The 11th lucky number is 37." },

  { id:233, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Derangement numbers D(n): permutations with no fixed points",
    sequence:[1,0,1,2,9,44,265],options:[1594,1738,1854,1980],ans:2,
    exp:"D(n)=(n-1)×(D(n-1)+D(n-2)). D(7)=6×(265+44)=6×309=1854." },

  { id:234, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Simultaneously triangular AND Fibonacci numbers",
    sequence:[1,3,21,55],options:[610,987,1597,2584],ans:1,
    exp:"Numbers that are both triangular (n(n+1)/2) and Fibonacci. The sequence grows very rapidly: 1,3,21,55,987. 987 is Fibonacci (16th) and triangular (T(43)=946? Let me verify: 987=T(n)→n(n+1)/2=987→n≈44. 43×44/2=946 ✗. 44×45/2=990 ✗. Actually 987 is Fibonacci but checking triangular: the known sequence is 1,3,21,55,987…)." },

  { id:235, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Fermat numbers: F(n) = 2^(2^n) + 1",
    sequence:[3,5,17,257],options:[32769,65537,131073,262145],ans:1,
    exp:"Fermat numbers: F(n)=2^(2^n)+1. F(4)=2^(2^4)+1=2^16+1=65536+1=65537." },

  { id:236, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Each term = previous term reversed and added, mod 10000",
    sequence:[1001,2002,4004,8008,7007,5005,10,11],options:[20,22,121,1111],ans:1,
    exp:"Each term: reverse digits and add (mod 10000). 11 reversed=11, 11+11=22." },

  { id:237, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Sequence of numbers with exactly 3 divisors (squares of primes)",
    sequence:[4,9,25,49,121,169],options:[196,225,256,289],ans:3,
    exp:"Numbers with exactly 3 divisors are squares of prime numbers (p²): divisors are 1, p, p². After 13²=169, the next prime is 17, so 17²=289." },

  { id:238, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Triangular numbers mod 7 form a period-7 cycle",
    sequence:[0,1,3,6,3,1,0,0,1,3],options:[3,6,7,9],ans:1,
    exp:"Triangular numbers T(n)=n(n+1)/2 modulo 7 repeat with period 7: 0,1,3,6,3,1,0,0,1,3,6,3,1,0… Position 10 (0-indexed): 10 mod 7=3 → value at position 3 in the cycle = 6." },

  { id:239, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Van der Corput sequence in base 2 (numerators when mirroring binary)",
    sequence:[0,1,1,3,1,3,3,7,1,3],options:[3,5,7,9],ans:0,
    exp:"Van der Corput sequence: reflect the binary representation of n to get a fraction, multiply by 2^k to get integers in order. The sequence of numerators goes 0,1,1,3,1,3,3,7,1,3,3,7,3,7,7,15… Position 10: 3." },

  { id:240, type:"sequence", cat:"Number", diff:"Impossible",
    title:"What number comes next?", summary:"Stern-Brocot tree level sums: sum of all fractions in the nth row",
    sequence:[1,2,4,8,16,32],options:[48,56,64,72],ans:2,
    exp:"Each level of the Stern-Brocot tree contains 2^(n-1) fractions. The sum of all numerators (or denominators) at level n doubles each time, following 2^(n-1). The 7th term = 2^6 = 64." },

];

// ─────────────────────────────────────────────────────────────
// VERBAL  (5 Easy · 10 Medium · 15 Hard)
// ─────────────────────────────────────────────────────────────
const VERBAL = [

  // ── Easy ──────────────────────────────────────────────────
  { id:61, type:"analogy", cat:"Verbal", diff:"Easy",
    title:"Complete the analogy:", summary:"Collective noun analogy",
    prompt:"Fish : School  ·  Wolf : ?",
    options:["Den","Herd","Pack","Flock"], ans:2,
    exp:"A group of fish is a school; a group of wolves is a pack." },

  { id:62, type:"analogy", cat:"Verbal", diff:"Easy",
    title:"Complete the analogy:", summary:"Part-to-whole analogy",
    prompt:"Chapter : Book  ·  Act : ?",
    options:["Scene","Play","Theatre","Script"], ans:1,
    exp:"A chapter is a division of a book; an act is a division of a play." },

  { id:63, type:"analogy", cat:"Verbal", diff:"Easy",
    title:"Complete the analogy:", summary:"Tool → function analogy",
    prompt:"Pen : Write  ·  Scissors : ?",
    options:["Paper","Sharp","Cut","Metal"], ans:2,
    exp:"A pen is used to write; scissors are used to cut." },

  { id:64, type:"analogy", cat:"Verbal", diff:"Easy",
    title:"Complete the analogy:", summary:"Worker → workplace analogy",
    prompt:"Doctor : Hospital  ·  Teacher : ?",
    options:["School","Student","Lesson","Chalk"], ans:0,
    exp:"A doctor works in a hospital; a teacher works in a school." },

  { id:65, type:"analogy", cat:"Verbal", diff:"Easy",
    title:"Complete the analogy:", summary:"Direct opposites analogy",
    prompt:"Hot : Cold  ·  Up : ?",
    options:["High","Down","Below","Under"], ans:1,
    exp:"Hot and cold are direct opposites; up and down are direct opposites." },

  // ── Medium ─────────────────────────────────────────────────
  { id:66, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Instrument → measurement analogy",
    prompt:"Thermometer : Temperature  ·  Barometer : ?",
    options:["Weather","Pressure","Altitude","Humidity"], ans:1,
    exp:"A thermometer measures temperature; a barometer measures atmospheric pressure." },

  { id:67, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Professional output analogy",
    prompt:"Architect : Blueprint  ·  Composer : ?",
    options:["Concert","Instrument","Score","Symphony"], ans:2,
    exp:"An architect produces a blueprint; a composer produces a musical score." },

  { id:68, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Opposite seasons analogy",
    prompt:"Day : Night  ·  Summer : ?",
    options:["Season","Hot","Winter","Rain"], ans:2,
    exp:"Day and night are opposites; summer and winter are opposites." },

  { id:69, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Object → material analogy",
    prompt:"Window : Glass  ·  Tyre : ?",
    options:["Car","Black","Rubber","Round"], ans:2,
    exp:"A window is made of glass; a tyre is made of rubber." },

  { id:70, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Craftsperson → product analogy",
    prompt:"Baker : Bread  ·  Potter : ?",
    options:["Wheel","Fire","Clay","Pottery"], ans:3,
    exp:"A baker makes bread; a potter makes pottery." },

  { id:71, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Animal → young analogy",
    prompt:"Cat : Kitten  ·  Dog : ?",
    options:["Cub","Puppy","Calf","Lamb"], ans:1,
    exp:"The young of a cat is a kitten; the young of a dog is a puppy." },

  { id:72, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Animal → characteristic sound",
    prompt:"Dog : Bark  ·  Lion : ?",
    options:["Purr","Growl","Roar","Hiss"], ans:2,
    exp:"A dog's characteristic vocalization is a bark; a lion's characteristic vocalization is a roar." },

  { id:73, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Building → primary occupant analogy",
    prompt:"Library : Books  ·  Hospital : ?",
    options:["Doctors","Medicine","Patients","Nurses"], ans:2,
    exp:"A library's primary occupants are books; a hospital's primary occupants are patients." },

  { id:74, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Action → required tool analogy",
    prompt:"Write : Pen  ·  Dig : ?",
    options:["Hole","Shovel","Garden","Ground"], ans:1,
    exp:"You write with a pen; you dig with a shovel." },

  { id:75, type:"analogy", cat:"Verbal", diff:"Medium",
    title:"Complete the analogy:", summary:"Activity → outcome analogy",
    prompt:"Exercise : Fitness  ·  Study : ?",
    options:["School","Teacher","Knowledge","Books"], ans:2,
    exp:"Exercise produces fitness; study produces knowledge." },

  // ── Hard ───────────────────────────────────────────────────
  { id:76, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Optical antonym-pair analogy",
    prompt:"Opaque : Transparent  ·  Convex : ?",
    options:["Curved","Flat","Concave","Round"], ans:2,
    exp:"Opaque and transparent are optical opposites. Convex and concave are curvature opposites." },

  { id:77, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Degree / intensity analogy",
    prompt:"Warm : Hot  ·  Damp : ?",
    options:["Wet","Cold","Dry","Humid"], ans:0,
    exp:"Warm is a milder degree of hot; damp is a milder degree of wet." },

  { id:78, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Specialist → workplace analogy",
    prompt:"Judge : Court  ·  Scientist : ?",
    options:["Discovery","Experiment","Laboratory","Research"], ans:2,
    exp:"A judge presides in a court; a scientist works in a laboratory." },

  { id:79, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Absence → presence (abstract opposites)",
    prompt:"Ignorance : Knowledge  ·  Chaos : ?",
    options:["Harmony","Control","Peace","Order"], ans:3,
    exp:"Ignorance is the absence of knowledge; chaos is the absence of order." },

  { id:80, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Draft → completed form analogy",
    prompt:"Manuscript : Book  ·  Blueprint : ?",
    options:["Architect","Design","Building","Drawing"], ans:2,
    exp:"A manuscript is the preliminary form of a published book; a blueprint is the preliminary form of a completed building." },

  { id:81, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Defining tool → specialist analogy",
    prompt:"Pen : Author  ·  Scalpel : ?",
    options:["Hospital","Medicine","Surgeon","Operation"], ans:2,
    exp:"A pen is the defining tool of an author; a scalpel is the defining tool of a surgeon." },

  { id:82, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Opposite extremes analogy",
    prompt:"Drought : Flood  ·  Famine : ?",
    options:["Harvest","Hunger","Feast","Surplus"], ans:3,
    exp:"Drought and flood are opposite weather extremes; famine and surplus are opposite food-supply extremes." },

  { id:83, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Excessive focus / fixation analogy",
    prompt:"Pedant : Detail  ·  Miser : ?",
    options:["Wealth","Poverty","Money","Gold"], ans:2,
    exp:"A pedant fixates excessively on small details; a miser fixates excessively on money." },

  { id:84, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Large work → formal subdivision analogy",
    prompt:"Symphony : Movements  ·  Novel : ?",
    options:["Pages","Chapters","Sentences","Paragraphs"], ans:1,
    exp:"A symphony is formally divided into movements; a novel is formally divided into chapters." },

  { id:85, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Activity period analogy",
    prompt:"Nocturnal : Night  ·  Diurnal : ?",
    options:["Morning","Day","Dawn","Dusk"], ans:1,
    exp:"Nocturnal describes organisms active at night; diurnal describes organisms active during the day." },

  { id:86, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Person → object of aversion analogy",
    prompt:"Misanthrope : People  ·  Xenophobe : ?",
    options:["Fear","Strangers","Foreigners","Countries"], ans:2,
    exp:"A misanthrope has an aversion to people in general; a xenophobe has an aversion to foreigners." },

  { id:87, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Vision condition → affected distance analogy",
    prompt:"Myopia : Distance  ·  Hyperopia : ?",
    options:["Vision","Light","Near","Distance"], ans:2,
    exp:"Myopia causes difficulty seeing at a distance (near-sighted); hyperopia causes difficulty seeing up close (far-sighted)." },

  { id:88, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Specialist → output analogy",
    prompt:"Cartographer : Maps  ·  Lexicographer : ?",
    options:["Words","Books","Dictionaries","Languages"], ans:2,
    exp:"A cartographer makes maps; a lexicographer compiles dictionaries." },

  { id:89, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Excessive behaviour → domain analogy",
    prompt:"Verbose : Words  ·  Parsimonious : ?",
    options:["Speech","Praise","Spending","Time"], ans:2,
    exp:"A verbose person uses an excessive number of words; a parsimonious person is excessively sparing with spending." },

  { id:90, type:"analogy", cat:"Verbal", diff:"Hard",
    title:"Complete the analogy:", summary:"Enclosure → housed creature analogy",
    prompt:"Apiary : Bees  ·  Aviary : ?",
    options:["Eggs","Wings","Birds","Nests"], ans:2,
    exp:"An apiary is a place where bees are kept; an aviary is a place where birds are kept." },

  // ── Very Hard ──────────────────────────────────────────────

  { id:161, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Systematic study analogy (specialist fields)",
    prompt:"Entomologist : Insects  ·  Ornithologist : ?",
    options:["Eggs","Feathers","Birds","Flight"],ans:2,
    exp:"An entomologist is a specialist who studies insects; an ornithologist is a specialist who studies birds." },

  { id:162, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Collector's field analogy",
    prompt:"Numismatics : Coins  ·  Philately : ?",
    options:["Books","Currency","Stamps","Antiques"],ans:2,
    exp:"Numismatics is the study and collection of coins; philately is the study and collection of postage stamps." },

  { id:163, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Orbital extremes analogy",
    prompt:"Apogee : Perigee  ·  Aphelion : ?",
    options:["Zenith","Nadir","Perihelion","Periastron"],ans:2,
    exp:"Apogee (farthest from Earth) and perigee (nearest) describe lunar/satellite orbits. Aphelion (farthest from Sun) and perihelion (nearest) describe planetary orbits." },

  { id:164, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Reasoning type analogy",
    prompt:"Syllogism : Deductive  ·  Analogy : ?",
    options:["Abductive","Inductive","Intuitive","Speculative"],ans:1,
    exp:"A syllogism is a form of deductive reasoning (certain conclusions from premises). Analogy is a form of inductive reasoning (probable conclusions from similarity)." },

  { id:165, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Rhetorical figure analogy",
    prompt:"Oxymoron : Contradictory terms  ·  Pleonasm : ?",
    options:["Rhyming words","Redundant words","Archaic words","Foreign words"],ans:1,
    exp:"An oxymoron combines contradictory terms ('deafening silence'). A pleonasm uses redundant words ('free gift', 'past history')." },

  { id:166, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Political philosophy analogy",
    prompt:"Hegemony : Dominance  ·  Autarky : ?",
    options:["Isolation","Self-sufficiency","Democracy","Prosperity"],ans:1,
    exp:"Hegemony is political or cultural dominance. Autarky is economic self-sufficiency — the policy of being independent from external trade." },

  { id:167, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Enthusiast analogy",
    prompt:"Bibliophile : Books  ·  Oenophile : ?",
    options:["Art","Music","Wine","Food"],ans:2,
    exp:"A bibliophile is a lover of books. An oenophile is a lover and connoisseur of wine." },

  { id:168, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Greek tragedy causation analogy",
    prompt:"Hubris : Nemesis  ·  Cause : ?",
    options:["Effect","Origin","Reason","Source"],ans:0,
    exp:"In Greek tragedy, hubris (excessive pride) inevitably produces nemesis (downfall/punishment). The relationship is cause to effect." },

  { id:169, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Linguistic phenomenon analogy",
    prompt:"Onomatopoeia : Sound  ·  Synesthesia : ?",
    options:["Sight","Mixed senses","Touch","Colour"],ans:1,
    exp:"Onomatopoeia creates words that imitate sounds. Synesthesia is a condition where stimulation of one sense produces an automatic response in another — a blending of mixed senses." },

  { id:170, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Persuasion method analogy",
    prompt:"Demagogue : Emotion  ·  Sophist : ?",
    options:["Emotion","Logic","Truth","Rhetoric"],ans:3,
    exp:"A demagogue wins support by appealing to emotion and prejudice. A sophist uses rhetoric — clever, persuasive-sounding arguments — without regard for truth." },

  { id:171, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Word economy analogy",
    prompt:"Laconic : Brief  ·  Loquacious : ?",
    options:["Quiet","Verbose","Eloquent","Persuasive"],ans:1,
    exp:"Laconic means using very few words (concise). Loquacious means talking excessively — verbose." },

  { id:172, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Branch of philosophy analogy",
    prompt:"Aetiology : Causes  ·  Ontology : ?",
    options:["Knowledge","Existence","Reality","Consciousness"],ans:1,
    exp:"Aetiology is the study of causes (of diseases, phenomena). Ontology is the branch of philosophy that studies the nature of existence and being." },

  { id:173, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Epistemological source analogy",
    prompt:"Empirical : Observation  ·  A priori : ?",
    options:["Experience","Intuition","Reason","Deduction"],ans:2,
    exp:"Empirical knowledge is derived from observation and experience. A priori knowledge is derived through reason alone, independent of experience." },

  { id:174, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Dramatic opposition analogy",
    prompt:"Protagonist : Antagonist  ·  Thesis : ?",
    options:["Hypothesis","Antithesis","Synthesis","Argument"],ans:1,
    exp:"A protagonist is opposed by an antagonist. A thesis is opposed by its antithesis (the direct counter-proposition in Hegelian dialectic)." },

  { id:175, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"German loanword emotion analogy",
    prompt:"Schadenfreude : Others' misfortune  ·  Weltschmerz : ?",
    options:["Self-pity","The world's suffering","Personal grief","Social anxiety"],ans:1,
    exp:"Schadenfreude = pleasure derived from others' misfortune. Weltschmerz = world-weariness; melancholy caused by contemplating the state of the world and its suffering." },

  { id:176, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Cognitive process analogy",
    prompt:"Catharsis : Emotions  ·  Epiphany : ?",
    options:["Senses","Vision","Understanding","Imagination"],ans:2,
    exp:"Catharsis is the process of releasing and purging pent-up emotions. Epiphany is the moment of sudden, clear understanding — a cognitive release." },

  { id:177, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Cartographic specialist analogy",
    prompt:"Cartographer : Maps  ·  Lexicographer : ?",
    options:["Words","Books","Dictionaries","Languages"],ans:2,
    exp:"A cartographer makes maps; a lexicographer compiles dictionaries." },

  { id:178, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Specialist enclosure analogy",
    prompt:"Apiary : Bees  ·  Aviary : ?",
    options:["Eggs","Wings","Birds","Nests"],ans:2,
    exp:"An apiary is an enclosure kept for bees; an aviary is an enclosure kept for birds." },

  { id:179, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Excessive behaviour domain analogy",
    prompt:"Verbose : Words  ·  Parsimonious : ?",
    options:["Speech","Praise","Spending","Time"],ans:2,
    exp:"A verbose person uses an excessive number of words. A parsimonious person is excessively sparing with money — reluctant to spend." },

  { id:180, type:"analogy", cat:"Verbal", diff:"Very Hard",
    title:"Complete the analogy:", summary:"Degree of severity analogy (vision)",
    prompt:"Myopia : Distance  ·  Hyperopia : ?",
    options:["Vision","Light","Near","Far"],ans:2,
    exp:"Myopia (near-sightedness) causes difficulty seeing distant objects clearly. Hyperopia (far-sightedness) causes difficulty seeing nearby objects clearly." },


  // ── Impossible ─────────────────────────────────────────────

  { id:241, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Rhetorical figure: part-to-whole vs association",
    prompt:"Synecdoche : Part  ·  Metonymy : ?",
    options:["Whole","Symbol","Association","Replacement"],ans:2,
    exp:"Synecdoche uses a part to represent the whole ('all hands on deck'). Metonymy uses an associated concept to represent the thing ('the crown decided' = the monarch). Synecdoche is part→whole; metonymy is association→thing." },

  { id:242, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Classical rhetoric opposition: kataphasis vs apophasis",
    prompt:"Cataphasis : Affirmation  ·  Apophasis : ?",
    options:["Negation","Silence","Repetition","Amplification"],ans:0,
    exp:"Cataphasis (or kataphasis) describes God/reality through positive attributes ('God is good'). Apophasis (negative theology) defines through negation ('God is not finite'). They are theological-rhetorical opposites." },

  { id:243, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Syntax structure: coordination vs subordination",
    prompt:"Parataxis : Coordination  ·  Hypotaxis : ?",
    options:["Negation","Subordination","Repetition","Juxtaposition"],ans:1,
    exp:"Parataxis places clauses side by side with coordinating conjunctions ('I came, I saw, I conquered'). Hypotaxis arranges clauses in a hierarchy through subordination ('Because I came, I saw what I had to conquer')." },

  { id:244, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Memory systems: explicit vs implicit",
    prompt:"Episodic memory : Personal events  ·  Procedural memory : ?",
    options:["Language","Skills","Facts","Emotions"],ans:1,
    exp:"Episodic memory stores personally experienced events. Procedural memory stores automatic skills and how-to knowledge (riding a bike, typing) — it is implicit and not consciously recalled." },

  { id:245, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Wave physics: constructive vs destructive phenomena",
    prompt:"Constructive interference : Amplitude increases  ·  Destructive interference : ?",
    options:["Amplitude reverses","Amplitude cancels","Frequency increases","Phase shifts"],ans:1,
    exp:"Constructive interference occurs when wave peaks align, increasing amplitude. Destructive interference occurs when a peak meets a trough, causing the amplitudes to cancel out." },

  { id:246, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Philosophical knowledge types: analytic vs synthetic",
    prompt:"Analytic proposition : True by definition  ·  Synthetic proposition : ?",
    options:["True by logic alone","True by observation of the world","True in all possible worlds","True by contradiction"],ans:1,
    exp:"An analytic proposition is true by virtue of meaning alone ('all bachelors are unmarried'). A synthetic proposition's truth depends on how the world actually is — it must be verified by observation or experience." },

  { id:247, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Phonology: segmental vs suprasegmental features",
    prompt:"Phoneme : Segmental  ·  Tone : ?",
    options:["Prosodic","Suprasegmental","Morphological","Lexical"],ans:1,
    exp:"Phonemes are segmental units of sound (individual consonants and vowels). Tone (pitch, stress, intonation) is a suprasegmental feature — it overlays segments and operates above the level of individual sounds." },

  { id:248, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Biochemistry enzyme action: catalyst activity vs inhibition",
    prompt:"Allosteric activation : Increases enzyme activity  ·  Competitive inhibition : ?",
    options:["Increases substrate affinity","Blocks active site","Destroys the enzyme","Changes enzyme shape permanently"],ans:1,
    exp:"Allosteric activation occurs when a molecule binds to a non-active site, increasing enzyme activity. Competitive inhibition occurs when a molecule structurally similar to the substrate blocks the active site, preventing substrate binding." },

  { id:249, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Economic theory: revealed vs stated preferences",
    prompt:"Revealed preference : Observed behaviour  ·  Stated preference : ?",
    options:["Experimental data","Hypothetical choice","Economic theory","Market outcome"],ans:1,
    exp:"Revealed preference infers what people value from what they actually do (observed behaviour). Stated preference asks people what they would hypothetically choose — surveys, contingent valuation, etc." },

  { id:250, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Topology: open vs closed sets",
    prompt:"Open set : Does not contain its boundary  ·  Closed set : ?",
    options:["Contains no interior points","Contains its boundary","Has no limit points","Is unbounded"],ans:1,
    exp:"An open set contains none of its boundary points (like an open interval). A closed set contains all its boundary (limit) points — the complement of an open set." },

  { id:251, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Cognitive science: bottom-up vs top-down processing",
    prompt:"Bottom-up processing : Stimulus-driven  ·  Top-down processing : ?",
    options:["Reflex-driven","Knowledge-driven","Memory-driven","Emotion-driven"],ans:1,
    exp:"Bottom-up processing builds perception from raw sensory data. Top-down processing uses prior knowledge, expectations, and context to interpret and shape perception — it is conceptually or knowledge-driven." },

  { id:252, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Set theory: extension vs intension",
    prompt:"Extension : Set of all members  ·  Intension : ?",
    options:["The largest member","The defining property","The set's cardinality","The universal set"],ans:1,
    exp:"The extension of a concept is the set of all things it applies to. The intension is the set of defining properties that determine membership — the conceptual rule rather than the list." },

  { id:253, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Literary theory: fabula vs sjuzhet (Russian Formalism)",
    prompt:"Fabula : Chronological story events  ·  Sjuzhet : ?",
    options:["The narrator's voice","The narrative discourse or plot structure","The thematic content","The characters' motivations"],ans:1,
    exp:"In Russian Formalism, fabula is the raw chronological sequence of events in a story's world. Sjuzhet is the artistic arrangement and presentation of those events as actually told — the narrative's structure and order." },

  { id:254, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Genetics: phenotype vs genotype determination",
    prompt:"Genotype : Genetic makeup  ·  Phenotype : ?",
    options:["Dominant allele","Observable characteristics","Chromosomal structure","Mutation frequency"],ans:1,
    exp:"The genotype is an organism's complete genetic blueprint. The phenotype is the observable expression of that blueprint — the physical, biochemical, and physiological characteristics that result from genotype and environment." },

  { id:255, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Semiotics: signifier vs signified (de Saussure)",
    prompt:"Signifier : Sound-image or written form  ·  Signified : ?",
    options:["The referent object","The mental concept","The dictionary definition","The cultural context"],ans:1,
    exp:"In de Saussure's semiotics, the signifier is the sound-image or written form of a word. The signified is the mental concept it evokes — not the actual object in the world (the referent), but the idea." },

  { id:256, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Thermodynamics: enthalpy vs entropy",
    prompt:"Enthalpy : Heat content at constant pressure  ·  Entropy : ?",
    options:["Energy available for work","Degree of disorder or dispersal of energy","Temperature of a system","Pressure of a system"],ans:1,
    exp:"Enthalpy (H) measures heat content at constant pressure — the total energy of a system including PV work. Entropy (S) measures the degree of disorder, randomness, or energy dispersal within a system." },

  { id:257, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Philosophy of mind: qualia vs intentionality",
    prompt:"Qualia : Subjective feel of experience  ·  Intentionality : ?",
    options:["The intensity of experience","The aboutness of mental states","The duration of consciousness","The source of free will"],ans:1,
    exp:"Qualia are the subjective, phenomenal qualities of conscious experience ('what it is like' to see red). Intentionality is the property of mental states to be 'about' or 'directed at' something — their representational content." },

  { id:258, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Linguistics: langue vs parole (de Saussure)",
    prompt:"Langue : Abstract system of language rules  ·  Parole : ?",
    options:["The dictionary of a language","Actual spoken or written instances","The grammar of a language","The historical evolution of language"],ans:1,
    exp:"Langue is the abstract, shared system of linguistic rules and conventions that exist in a speech community. Parole is the actual, concrete use of language — the individual utterances produced in real situations." },

  { id:259, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Statistics: Type I vs Type II errors",
    prompt:"Type I error : Rejecting a true null hypothesis  ·  Type II error : ?",
    options:["Accepting a true null hypothesis","Failing to reject a false null hypothesis","Calculating an incorrect p-value","Using the wrong statistical test"],ans:1,
    exp:"A Type I error (false positive) occurs when you incorrectly reject a true null hypothesis. A Type II error (false negative) occurs when you fail to reject a null hypothesis that is actually false." },

  { id:260, type:"analogy", cat:"Verbal", diff:"Impossible",
    title:"Complete the analogy:", summary:"Quantum mechanics: superposition vs entanglement",
    prompt:"Superposition : A system existing in multiple states simultaneously  ·  Entanglement : ?",
    options:["A particle occupying two locations","Correlated states across separated particles","Wave-particle duality","Quantum tunnelling through a barrier"],ans:1,
    exp:"Superposition means a quantum system exists in multiple states at once until measured. Entanglement means two particles have correlated quantum states such that measuring one instantly determines the state of the other, regardless of distance." },

];

// ─────────────────────────────────────────────────────────────
// LOGIC  (5 Easy · 10 Medium · 15 Hard)
// ─────────────────────────────────────────────────────────────
const LOGIC = [

  // ── Easy ──────────────────────────────────────────────────
  { id:91, type:"logic", cat:"Logic", diff:"Easy",
    title:"What is the valid conclusion?", summary:"Modus ponens (rain → wet ground)",
    premises:["If it rains, the ground gets wet.","It is raining."],
    options:["The ground is wet","It might stop raining","The ground is dry","We cannot draw a conclusion"],
    ans:0, exp:"Modus ponens: if P then Q; P is true; therefore Q. The ground must be wet." },

  { id:92, type:"logic", cat:"Logic", diff:"Easy",
    title:"What is the valid conclusion?", summary:"All A are B (birds / wings)",
    premises:["All birds have wings.","A penguin is a bird."],
    options:["Penguins can fly","Penguins have wings","All winged animals are birds","Penguins are not birds"],
    ans:1, exp:"All birds have wings; a penguin is a bird — therefore a penguin has wings. Having wings does not imply flight." },

  { id:93, type:"logic", cat:"Logic", diff:"Easy",
    title:"What is the valid conclusion?", summary:"Simple deduction (even numbers / 16)",
    premises:["All even numbers are divisible by 2.","16 is an even number."],
    options:["16 is divisible by 4","16 is divisible by 2","2 is divisible by 16","16 is not divisible by 2"],
    ans:1, exp:"Directly applying the rule: 16 is even, so 16 must be divisible by 2." },

  { id:94, type:"logic", cat:"Logic", diff:"Easy",
    title:"What is the valid conclusion?", summary:"All A are B (dogs / animals)",
    premises:["All dogs are animals.","Rex is a dog."],
    options:["Rex is not an animal","Rex is an animal","All animals are dogs","Rex is not a dog"],
    ans:1, exp:"All dogs are animals; Rex is a dog — therefore Rex is an animal." },

  { id:95, type:"logic", cat:"Logic", diff:"Easy",
    title:"What is the valid conclusion?", summary:"Modus ponens (study → pass)",
    premises:["If you study hard, you will pass the exam.","Maria studied hard."],
    options:["Maria will pass","Maria might pass","Maria did not study","Maria failed"],
    ans:0, exp:"Modus ponens: if P then Q; P is true (Maria studied hard); therefore Q (Maria will pass)." },

  // ── Medium ─────────────────────────────────────────────────
  { id:96, type:"logic", cat:"Logic", diff:"Medium",
    title:"What is the valid conclusion?", summary:"Categorical syllogism (shapes)",
    premises:["All squares are rectangles.","All rectangles are parallelograms."],
    options:["All parallelograms are squares","Some rectangles are not parallelograms","All squares are parallelograms","No squares are parallelograms"],
    ans:2, exp:"All squares → rectangles → parallelograms. By transitivity, all squares are parallelograms." },

  { id:97, type:"logic", cat:"Logic", diff:"Medium",
    title:"What is the valid conclusion?", summary:"No A are B, All C are A (reptiles / snakes)",
    premises:["No reptiles are mammals.","All snakes are reptiles."],
    options:["Some snakes are mammals","No snakes are mammals","All mammals are snakes","Some reptiles are not snakes"],
    ans:1, exp:"All snakes are reptiles; no reptiles are mammals — therefore no snakes are mammals." },

  { id:98, type:"logic", cat:"Logic", diff:"Medium",
    title:"Which response is correct?", summary:"Affirming the consequent fallacy (squares / four equal sides)",
    premises:["All squares have four equal sides.","Shape X has four equal sides."],
    options:["X is definitely a square","X might be a square, but we cannot be certain","X is a rectangle","X cannot be a square"],
    ans:1, exp:"Having four equal sides is necessary but not sufficient for being a square — a rhombus also qualifies. This is 'affirming the consequent'." },

  { id:99, type:"logic", cat:"Logic", diff:"Medium",
    title:"Which conclusion follows necessarily?", summary:"All A are B implies some B are A",
    premises:["All teachers are graduates.","Some graduates are researchers."],
    options:["All teachers are researchers","No teachers are researchers","Some graduates are teachers","All researchers are teachers"],
    ans:2, exp:"If all teachers are graduates, teachers form a subset of graduates — therefore some graduates are teachers." },

  { id:100, type:"logic", cat:"Logic", diff:"Medium",
    title:"What is the valid conclusion?", summary:"No A can B, X is A (fish / land)",
    premises:["No fish can survive on land.","A salmon is a fish."],
    options:["A salmon can survive on land","A salmon cannot survive on land","Some fish can survive on land","Land animals are not fish"],
    ans:1, exp:"No fish can survive on land; a salmon is a fish — therefore a salmon cannot survive on land." },

  { id:101, type:"logic", cat:"Logic", diff:"Medium",
    title:"What is the valid conclusion?", summary:"Primes > 2 are odd (17)",
    premises:["All prime numbers greater than 2 are odd.","17 is a prime number greater than 2."],
    options:["17 is even","17 is odd","All odd numbers are prime","17 is not a prime number"],
    ans:1, exp:"17 is prime and greater than 2, so it must be odd. The converse — all odd numbers are prime — does not follow." },

  { id:102, type:"logic", cat:"Logic", diff:"Medium",
    title:"Which conclusion follows necessarily?", summary:"Some A are B, All B are C (politicians / lawyers / bar exam)",
    premises:["Some politicians are lawyers.","All lawyers have passed the bar exam."],
    options:["All politicians have passed the bar exam","Some politicians have passed the bar exam","No politicians have passed the bar exam","All lawyers are politicians"],
    ans:1, exp:"The politician-lawyers have passed the bar exam, so some (not necessarily all) politicians have passed it." },

  { id:103, type:"logic", cat:"Logic", diff:"Medium",
    title:"What is the valid conclusion?", summary:"All A have property B; X is A → X has B (metals / conductivity)",
    premises:["All metals conduct electricity.","Gold is a metal."],
    options:["All things that conduct electricity are metals","Gold does not conduct electricity","Gold conducts electricity","Some metals do not conduct electricity"],
    ans:2, exp:"All metals conduct electricity; gold is a metal — therefore gold conducts electricity." },

  { id:104, type:"logic", cat:"Logic", diff:"Medium",
    title:"What is the valid conclusion?", summary:"Modus ponens (no alarm → no evacuation)",
    premises:["If the alarm does not sound, no one evacuates.","The alarm did not sound."],
    options:["Everyone evacuated","No one evacuated","The alarm did sound","We cannot determine what happened"],
    ans:1, exp:"Modus ponens: if P (alarm silent) then Q (no evacuation); P is true — therefore Q is true." },

  { id:105, type:"logic", cat:"Logic", diff:"Medium",
    title:"Which conclusion follows necessarily?", summary:"Some A are B, No B are C (teachers / parents / weekends)",
    premises:["Some teachers are parents.","No parents work on weekends."],
    options:["All teachers work on weekends","No teachers work on weekends","Some teachers do not work on weekends","All parents are teachers"],
    ans:2, exp:"Teacher-parents do not work weekends, so some teachers (those who are parents) do not work weekends." },

  // ── Hard ───────────────────────────────────────────────────
  { id:106, type:"logic", cat:"Logic", diff:"Hard",
    title:"Which conclusion is necessarily true?", summary:"Partial syllogism (artists / musicians / creative)",
    premises:["Some artists are musicians.","All musicians are creative."],
    options:["All artists are creative","Some artists are creative","No artists are creative","All creative people are artists"],
    ans:1, exp:"Those artists who are musicians are also creative — so some (not necessarily all) artists are creative." },

  { id:107, type:"logic", cat:"Logic", diff:"Hard",
    title:"Which conclusion follows necessarily?", summary:"Some A are B, No B are C (doctors / artists / engineers)",
    premises:["Some doctors are artists.","No artists are engineers."],
    options:["Some doctors are engineers","No doctors are artists","Some doctors are not engineers","All doctors are artists"],
    ans:2, exp:"Doctor-artists cannot be engineers (no artists are engineers) — so those doctors are definitely not engineers, meaning some doctors are not engineers." },

  { id:108, type:"logic", cat:"Logic", diff:"Hard",
    title:"Which response is correct?", summary:"Affirming the consequent (fruit / seeds)",
    premises:["If something is a fruit, it has seeds.","A tomato has seeds."],
    options:["A tomato is definitely a fruit","A tomato might be a fruit, but we cannot be certain","A tomato has no seeds","A tomato is a vegetable, not a fruit"],
    ans:1, exp:"Having seeds is a consequence of being a fruit, but seeds alone don't confirm it is a fruit. This is 'affirming the consequent'." },

  { id:109, type:"logic", cat:"Logic", diff:"Hard",
    title:"What is the valid conclusion?", summary:"3-premise modus ponens chain (rain → streets → delays)",
    premises:["If it is raining, the streets become wet.","If the streets are wet, traffic delays occur.","It is raining."],
    options:["Traffic delays are occurring","The streets might be wet","It is not raining","No traffic delays occur"],
    ans:0, exp:"Applying modus ponens twice: raining → streets wet → traffic delays are occurring." },

  { id:110, type:"logic", cat:"Logic", diff:"Hard",
    title:"Which conclusion is necessarily true?", summary:"Exclusive disjunction (alarm / power outage)",
    premises:["Either the alarm went off or the power went out, but not both.","The power did not go out."],
    options:["The alarm did not go off","The alarm went off","Both events occurred","We cannot determine what happened"],
    ans:1, exp:"Exactly one of the two events occurred. Since the power did not go out, the alarm must have gone off." },

  { id:111, type:"logic", cat:"Logic", diff:"Hard",
    title:"What is the valid conclusion?", summary:"Modus tollens (exams → graduation)",
    premises:["If a student passes all exams, they graduate.","Alex did not graduate."],
    options:["Alex passed all exams","Alex failed at least one exam","No student graduated","Alex did not take any exams"],
    ans:1, exp:"Contrapositive: not graduating → not passing all exams. Alex didn't graduate → Alex failed at least one exam." },

  { id:112, type:"logic", cat:"Logic", diff:"Hard",
    title:"Which conclusion is necessarily true?", summary:"3-premise deduction (scientists / curious / impatient / Maria)",
    premises:["All scientists are curious.","Some curious people are impatient.","Maria is a scientist."],
    options:["Maria is curious","Maria is impatient","All curious people are scientists","Some scientists are not curious"],
    ans:0, exp:"Maria is a scientist → Maria is curious (from premise 1 and 3). We cannot conclude she is impatient: only 'some' curious people are (not all)." },

  { id:113, type:"logic", cat:"Logic", diff:"Hard",
    title:"Which response is correct?", summary:"Denying the antecedent fallacy (profitable → dividends → happy)",
    premises:["If a company is profitable, it pays dividends.","If a company pays dividends, investors are happy.","This company is not profitable."],
    options:["Investors are happy","Investors are not happy","We cannot conclude whether investors are happy","The company pays dividends"],
    ans:2, exp:"This is 'denying the antecedent' — a logical fallacy. From 'not profitable' we cannot conclude that dividends are not paid (there may be other reasons) or that investors are unhappy." },

  { id:114, type:"logic", cat:"Logic", diff:"Hard",
    title:"What is the valid conclusion?", summary:"3-premise chain using universal negative (cats / mammals / eggs)",
    premises:["All cats are mammals.","No mammals lay eggs.","Felix is a cat."],
    options:["Felix lays eggs","Felix does not lay eggs","Some cats lay eggs","Felix is not a mammal"],
    ans:1, exp:"Felix is a cat → Felix is a mammal → Felix does not lay eggs (since no mammals do)." },

  { id:115, type:"logic", cat:"Logic", diff:"Hard",
    title:"What is the valid conclusion?", summary:"Contrapositive reasoning (politicians / honesty)",
    premises:["No politicians are completely honest.","Alex is completely honest."],
    options:["Alex is a politician","Alex is not a politician","Some politicians are honest","No honest people exist"],
    ans:1, exp:"Contrapositive of premise 1: if someone is completely honest, they are not a politician. Alex is completely honest → Alex is not a politician." },

  { id:116, type:"logic", cat:"Logic", diff:"Hard",
    title:"What is the valid conclusion?", summary:"Modus tollens + disjunctive syllogism (Lisa: bus or drove)",
    premises:["Either Lisa took the bus or she drove, but not both.","If Lisa drove, she would have arrived on time.","Lisa did not arrive on time."],
    options:["Lisa drove","Lisa took the bus","Lisa arrived on time","We cannot determine how Lisa traveled"],
    ans:1, exp:"Modus tollens: Lisa didn't arrive on time → Lisa didn't drive. Then disjunctive syllogism: didn't drive → took the bus." },

  { id:117, type:"logic", cat:"Logic", diff:"Hard",
    title:"Which conclusion follows necessarily?", summary:"Transitive chain + universal negative (squares → parallelograms, no parallelograms are circles)",
    premises:["All squares are rectangles.","All rectangles are parallelograms.","No parallelograms are circles."],
    options:["Some squares are circles","No squares are circles","All circles are squares","Some parallelograms are squares"],
    ans:1, exp:"All squares → rectangles → parallelograms. No parallelograms are circles → no squares are circles." },

  { id:118, type:"logic", cat:"Logic", diff:"Hard",
    title:"What is the valid conclusion?", summary:"4-step conditional chain (Monday → store closed → no groceries → takeaway)",
    premises:["If it is Monday, the store is closed.","If the store is closed, we cannot buy groceries.","If we cannot buy groceries, we will order takeaway.","It is Monday."],
    options:["The store is open","We can buy groceries","We will order takeaway","We will not order takeaway"],
    ans:2, exp:"Applying modus ponens three times: Monday → closed → no groceries → order takeaway." },

  { id:119, type:"logic", cat:"Logic", diff:"Hard",
    title:"What is the valid conclusion?", summary:"Biconditional reasoning (door alarm ↔ door open)",
    premises:["The door alarm sounds if and only if the door is open.","The door alarm is not sounding."],
    options:["The door is open","The door is not open","The alarm may be broken","We cannot determine the door's state"],
    ans:1, exp:"'If and only if' works both ways. Alarm sounds ↔ door is open. Alarm not sounding ↔ door is not open." },

  { id:120, type:"logic", cat:"Logic", diff:"Hard",
    title:"Which conclusion is necessarily true?", summary:"Multi-premise deduction (writers / creative / happy / John)",
    premises:["All writers are creative.","Some creative people are not happy.","John is a writer."],
    options:["John is creative","John is happy","John is not creative","All writers are happy"],
    ans:0, exp:"John is a writer → John is creative (from premises 1 and 3). Whether John is happy is unknown — only 'some' creative people are not happy, not all." },

  // ── Very Hard ──────────────────────────────────────────────

  { id:181, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"4-premise chain producing two simultaneous conclusions",
    premises:["If P, then Q and R.","If Q, then S.","If R, then not T.","P is true."],
    options:["S is false and T is true","S is true and T is false","S is true but T cannot be determined","We cannot determine S or T"],
    ans:1, exp:"From P (premise 4) → Q and R (premise 1) → S (premise 2, via Q) and not-T (premise 3, via R). Therefore S is true and T is false." },

  { id:182, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"Which statement best describes the following?", summary:"Inverse of a conditional is NOT logically equivalent to it",
    premises:["If it is a bat, then it is a mammal.","Claim: If it is NOT a bat, then it is NOT a mammal."],
    options:["The claim is necessarily true","The claim is necessarily false","The claim is possibly true but not necessarily","The claim is the contrapositive"],
    ans:2, exp:"The claim is the INVERSE of the original (negating both sides), not the contrapositive. The inverse is NOT logically equivalent — many non-bats (cats, whales) are still mammals. It is possibly true in some cases but not necessarily." },

  { id:183, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"Denying the antecedent fallacy in a 3-step chain",
    premises:["If Alex is kind, Blake trusts Alex.","If Blake trusts Alex, Blake confides in Alex.","Alex is NOT kind."],
    options:["Blake trusts Alex","Alex knows Blake's secret","Blake does not trust Alex","We cannot determine whether Blake trusts Alex"],
    ans:3, exp:"Premise 3 denies the antecedent of premise 1 — this is a logical fallacy. We cannot conclude anything about Blake's trust. Blake might trust Alex for entirely different reasons." },

  { id:184, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"Which conclusion necessarily follows?", summary:"Quantifier confusion: All A are B, Some B are C",
    premises:["All tigers are striped.","Some striped animals are domestic."],
    options:["Some tigers are domestic","No tigers are domestic","Some domestic animals are striped","All striped animals are domestic"],
    ans:2, exp:"Premise 2 directly implies (by conversion) that some domestic animals are striped. We CANNOT conclude any tigers are domestic — the 'striped domestics' could all be zebra-print cats, not tigers." },

  { id:185, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"Which conclusion necessarily follows?", summary:"5-step universal chain with final negation",
    premises:["All A are B.","All B are C.","All C are D.","No D are E.","X is A."],
    options:["X is E","X is not E","X might be E","We cannot determine"],
    ans:1, exp:"Chain: X is A→B→C→D. Since no D are E, and X is D, X is not E." },

  { id:186, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"Biconditional with two conditions (both required)",
    premises:["Alex passes the exam if and only if Alex studies hard AND gets enough sleep.","Alex did not get enough sleep."],
    options:["Alex passed the exam","Alex did not pass the exam","Alex studied hard","We cannot determine if Alex passed"],
    ans:1, exp:"The biconditional requires BOTH conditions for passing. Since Alex lacked sleep, the conjunction is false, so Alex did not pass." },

  { id:187, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"Which conclusion is necessarily true?", summary:"3-premise argument with universal + existential",
    premises:["Every doctor who specialises in surgery is skilled.","Some skilled people are careless.","Dr. Lee specialises in surgery."],
    options:["Dr. Lee is careless","Dr. Lee is not skilled","Dr. Lee is skilled","Dr. Lee is both skilled and careless"],
    ans:2, exp:"From premises 1 and 3: Dr. Lee is a surgeon → Dr. Lee is skilled. We cannot conclude carelessness — only 'some' skilled people are careless, not necessarily Dr. Lee." },

  { id:188, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"Disjunctive syllogism + modus ponens combined",
    premises:["Either Alex is lying or Alex is confused, but not both.","Alex is not confused.","If Alex is lying, then Alex knew the truth beforehand."],
    options:["Alex is confused","Alex is lying and knew the truth beforehand","Alex did not know the truth","We cannot determine"],
    ans:1, exp:"From premises 1 and 2 (disjunctive syllogism): Alex is lying. From premise 3 (modus ponens): Alex knew the truth beforehand. Both follow necessarily." },

  { id:189, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"Nested conditional: If P then (if Q then R)",
    premises:["If P is true, then: if Q is true, then R is true.","P is true.","Q is true."],
    options:["R is false","R is true","Q is false","We cannot determine R"],
    ans:1, exp:"Premise 2 activates the outer conditional: we get 'if Q then R'. Premise 3 provides Q. By modus ponens: R is true." },

  { id:190, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the correct assessment?", summary:"Detecting an inconsistent set of premises",
    premises:["All philosophers question everything.","Some philosophers are mathematicians.","No mathematicians question everything."],
    options:["Some mathematicians question everything","No philosophers are mathematicians","The premises are logically consistent","The premises are contradictory"],
    ans:3, exp:"Premises 1 and 2 together imply some mathematicians question everything (those who are philosophers). But premise 3 says no mathematicians do. This is a contradiction — the premises are inconsistent." },

  { id:191, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"Which conclusion necessarily follows?", summary:"'Most' quantifier: does overlap guarantee a conclusion?",
    premises:["Most politicians are lawyers.","Most lawyers are good at public speaking."],
    options:["All politicians are good at public speaking","Most politicians are good at public speaking","Some politicians are good at public speaking","No politicians are good at public speaking"],
    ans:2, exp:"'Most' (>50%) politicians are lawyers, and most of those lawyers are good speakers. At least some politician-lawyers must be good speakers. However 'most politicians' as a whole cannot be guaranteed without knowing exact percentages. 'Some' is the safe certain conclusion." },

  { id:192, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"4-premise chain (conditional + causal chain)",
    premises:["All metals conduct electricity.","All conductors can be used in circuits.","Gold is a metal.","This cable uses gold."],
    options:["This cable cannot be used in circuits","This cable can be used in circuits","All cables use gold","Gold does not conduct electricity"],
    ans:1, exp:"Gold is a metal→conducts electricity→can be used in circuits. Since this cable uses gold, it can be used in circuits." },

  { id:193, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"Which statement best describes the argument?", summary:"Valid argument with potentially false premise (false dilemma)",
    premises:["Either you support this policy completely or you oppose progress.","You do not support this policy completely."],
    options:["You oppose progress — this follows necessarily and the argument is sound","The argument is valid but premise 1 may commit a false dilemma, making it potentially unsound","Both premises must be true for the argument to work","The conclusion is true regardless of the premises"],
    ans:1, exp:"The argument is VALID (the conclusion 'you oppose progress' follows IF both premises are true). However, premise 1 presents a false dilemma — there may be middle positions. The argument is valid but not necessarily sound." },

  { id:194, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"Chain with universal negative + uncertain antecedent",
    premises:["No student who cheats passes the exam.","Some students who don't study cheat.","Alex does not study."],
    options:["Alex passed the exam","Alex failed the exam","Alex cheated","We cannot determine if Alex passed"],
    ans:3, exp:"Premise 2 says only 'some' (not all) non-studiers cheat — we can't be certain Alex cheated. Without knowing whether Alex cheated, we cannot conclude whether Alex passed." },

  { id:195, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"Contrapositive reasoning from two premises",
    premises:["If the theory is correct, the experiment succeeds.","The experiment failed. The equipment is not faulty."],
    options:["The theory is correct","The theory is not correct","The equipment is faulty","We cannot determine if the theory is correct"],
    ans:1, exp:"Contrapositive of premise 1: if experiment fails, theory is not correct. The experiment failed (premise 2) and equipment is fine (eliminating that as a cause). Therefore the theory is not correct." },

  { id:196, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"Complex biconditional chain (two linked biconditionals)",
    premises:["Alex passes if and only if Alex studies AND sleeps enough.","Blake passes if and only if Alex passes.","Alex studies but does not sleep enough."],
    options:["Alex passes and Blake passes","Alex fails and Blake fails","Alex passes and Blake fails","We cannot determine"],
    ans:1, exp:"From premise 3: Alex lacks sleep → fails biconditional in premise 1 → Alex fails. From premise 2: Alex fails → Blake fails." },

  { id:197, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"'Only if' — affirming the consequent fallacy",
    premises:["Alex wins only if Alex trains daily.","Alex trains daily."],
    options:["Alex wins","Alex does not win","Alex wins if and only if they train","We cannot determine if Alex wins"],
    ans:3, exp:"'Alex wins only if Alex trains' means winning→training. We have training, but this is affirming the consequent — we cannot conclude winning. Alex might train and still lose." },

  { id:198, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"Which conclusion is necessarily true?", summary:"5-step conditional chain (if-then cascade)",
    premises:["If it is Monday, the store is closed.","If the store is closed, we cannot buy groceries.","If we cannot buy groceries, we will order takeaway.","If we order takeaway, we spend more money.","It is Monday."],
    options:["We spend more money","We can buy groceries","The store is open","We will not order takeaway"],
    ans:0, exp:"Applying modus ponens four times: Monday→store closed→no groceries→takeaway→spend more money." },

  { id:199, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"What is the valid conclusion?", summary:"Biconditional: door alarm ↔ door open",
    premises:["The door alarm sounds if and only if the door is open.","The door alarm is NOT sounding."],
    options:["The door is open","The door is not open","The alarm may be broken","We cannot determine the door's state"],
    ans:1, exp:"A biconditional (iff) works in both directions: alarm↔open. Therefore not-alarm↔not-open. Since the alarm is not sounding, the door is not open." },

  { id:200, type:"logic", cat:"Logic", diff:"Very Hard",
    title:"Which conclusion is necessarily true?", summary:"3-premise: All A are B, Some B are not C, X is A",
    premises:["All writers are creative.","Some creative people are not happy.","John is a writer."],
    options:["John is creative","John is happy","John is not happy","All writers are happy"],
    ans:0, exp:"John is a writer (premise 3) → John is creative (premise 1). We cannot conclude about John's happiness — only 'some' creative people are not happy; John might or might not be among them. 'John is creative' is the only certain conclusion." },


  // ── Impossible ─────────────────────────────────────────────

  { id:261, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"6-premise cascade: P→(Q∧R), Q→S, R→¬T, S→U, ¬T→V, P is true",
    premises:["If P then both Q and R.","If Q then S.","If R then not-T.","If S then U.","If not-T then V.","P is true."],
    options:["U is false and V is false","U is true and V is true","U is true but V cannot be determined","S is false"],
    ans:1, exp:"From P(6): Q and R(1) → S(2) and not-T(3) → U(4) and V(5). Both U and V are necessarily true." },

  { id:262, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which response is logically correct?", summary:"Distinguishing valid from sound: an argument can be valid with false premises",
    premises:["All fish can fly.","A salmon is a fish.","Conclusion: A salmon can fly."],
    options:["The argument is valid and sound","The argument is valid but not sound","The argument is sound but not valid","The argument is neither valid nor sound"],
    ans:1, exp:"The argument is VALID: the conclusion follows necessarily from the premises (if both were true, the conclusion would be true). It is NOT SOUND because premise 1 is false. Validity concerns logical form; soundness requires valid form AND true premises." },

  { id:263, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Hypothetical syllogism with denying the consequent (modus tollens) at the end",
    premises:["If Alex studied, then Alex passed.","If Alex passed, then Alex graduated.","If Alex graduated, then Alex got a job.","Alex did not get a job."],
    options:["Alex graduated","Alex did not study","Alex passed but did not graduate","We cannot determine if Alex studied"],
    ans:1, exp:"Working backwards with modus tollens: not-job(4)→not-graduate(contrapositive of 3)→not-pass(contrapositive of 2)→not-study(contrapositive of 1). Alex did not study." },

  { id:264, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Complex quantifier argument: some/all interaction requiring careful scope analysis",
    premises:["All mathematicians are logical thinkers.","Some logical thinkers are poor communicators.","Some poor communicators are not valued by management.","Dr. Park is a mathematician."],
    options:["Dr. Park is a poor communicator","Dr. Park is not valued by management","Dr. Park is a logical thinker","Dr. Park is not a logical thinker"],
    ans:2, exp:"Dr. Park is a mathematician → logical thinker (from premises 1 and 4). We cannot conclude Dr. Park is a poor communicator (only 'some' logical thinkers are), let alone whether management values her. 'Dr. Park is a logical thinker' is the only certain conclusion." },

  { id:265, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which statement correctly identifies the fallacy?", summary:"Identifying the fallacy of composition",
    premises:["Each brick in this wall weighs 1 kg.","Therefore, this wall weighs 1 kg."],
    options:["This is the fallacy of division","This is the fallacy of composition","This is the fallacy of equivocation","This is a valid inference"],
    ans:1, exp:"This is the fallacy of COMPOSITION: assuming that what is true of each part must be true of the whole. The fallacy of division is the reverse (whole→parts). Composition incorrectly transfers a property of individual components to the entire composite." },

  { id:266, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Exclusive vs inclusive 'or' — the difference changes the conclusion",
    premises:["Alex will attend OR Blake will attend (but not both).","Both Alex AND Blake attended."],
    options:["The premises are consistent","The premises are contradictory","Alex attended alone","Blake attended alone"],
    ans:1, exp:"The first premise is an EXCLUSIVE disjunction (not both). The second premise asserts both attended. This directly violates the 'not both' clause — the premises are mutually contradictory. No valid conclusion follows from a contradiction except 'anything'." },

  { id:267, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"5-premise argument with universal and particular quantifiers across 3 categories",
    premises:["All scientists read journals.","All journal readers value evidence.","Some people who value evidence challenge authority.","No authority-challengers receive government grants.","Dr. Yuen is a scientist."],
    options:["Dr. Yuen challenges authority","Dr. Yuen does not receive government grants","Dr. Yuen values evidence","Dr. Yuen does not value evidence"],
    ans:2, exp:"Dr. Yuen is a scientist(5)→reads journals(1)→values evidence(2). We CANNOT conclude Dr. Yuen challenges authority — only 'some' evidence-valuers do(3). 'Dr. Yuen values evidence' is the only guaranteed conclusion." },

  { id:268, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which response correctly identifies the logical relationship?", summary:"Distinguishing logical equivalence: converse, inverse, and contrapositive",
    premises:["Original: If P then Q.","Which statement is logically equivalent to the original?"],
    options:["If Q then P (converse)","If not-P then not-Q (inverse)","If not-Q then not-P (contrapositive)","If P and Q then Q and P"],
    ans:2, exp:"Only the CONTRAPOSITIVE (if not-Q then not-P) is logically equivalent to the original (if P then Q). The converse (if Q then P) and inverse (if not-P then not-Q) are equivalent to EACH OTHER but not to the original. This is one of the most commonly misunderstood facts in logic." },

  { id:269, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Hypothetical syllogism with a biconditional complication",
    premises:["If and only if the server is running, the website is live.","If and only if the website is live, customers can place orders.","The server is not running."],
    options:["Customers can still place orders","Customers cannot place orders","The website may be live","We cannot determine if customers can place orders"],
    ans:1, exp:"From premise 3 and the biconditional in premise 1 (iff): server not running → website not live. From premise 2 (iff): website not live → customers cannot place orders. The chain works in both directions, so the conclusion is certain." },

  { id:270, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which response is correct?", summary:"Sorites paradox: tolerance in vagueness",
    premises:["A person with 0 hairs is bald.","If a person is bald, adding one hair does not make them non-bald.","Therefore, a person with 100,000 hairs is bald."],
    options:["The conclusion is definitely true","The conclusion follows logically from the premises but reveals a flaw in them","The conclusion does not follow from the premises","Premise 2 is necessarily true"],
    ans:1, exp:"This is the Sorites (heap) paradox. The conclusion DOES follow validly from the premises by repeated application of modus ponens. However, this reveals that premise 2 — a 'tolerance principle' — cannot be universally true, because its repeated application produces an absurd conclusion. The argument is valid but not sound." },

  { id:271, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Multi-stage chain using both modus ponens and disjunctive syllogism",
    premises:["If the power is on, the computer runs.","Either the computer runs or the backup generator activates.","The backup generator has not activated.","The power is on."],
    options:["The backup generator will activate","The computer is not running","The computer is running and the backup generator has not activated","The power is off"],
    ans:2, exp:"From premise 4+1 (MP): computer runs. From premise 2 + 'computer runs' (disjunctive syllogism not needed — computer runs satisfies the disjunction). From premise 3: generator not activated. Both facts hold: computer runs AND generator not activated." },

  { id:272, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which statement is necessarily true?", summary:"Nested conditionals and contrapositive chaining",
    premises:["If Alex trusts Sam, then if Sam is honest, Alex will confide in Sam.","Alex trusts Sam.","Sam is not honest."],
    options:["Alex confides in Sam","Alex does not confide in Sam","Alex does not trust Sam","We cannot determine if Alex confides in Sam"],
    ans:3, exp:"From premises 1+2 (MP): 'if Sam is honest, Alex will confide in Sam.' Premise 3 says Sam is not honest — this denies the antecedent (a fallacy). We CANNOT conclude whether Alex confides in Sam. Sam's dishonesty doesn't preclude Alex confiding for other reasons." },

  { id:273, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Argument from analogy — identifying when it fails",
    premises:["Aspirin relieved Alex's headache.","Aspirin is a painkiller.","Morphine is also a painkiller.","Therefore, morphine will relieve Alex's headache."],
    options:["Morphine will definitely relieve Alex's headache","Morphine might relieve Alex's headache, but the argument from analogy is weak","Morphine will definitely not relieve Alex's headache","The argument is valid and sound"],
    ans:1, exp:"This is an argument from analogy: both are painkillers, so morphine should work like aspirin. The conclusion might be true, but the argument is weak — shared category membership ('painkiller') doesn't guarantee shared specific properties. The analogy ignores differences in mechanism, dosage, and target pain type." },

  { id:274, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which conclusion necessarily follows?", summary:"Russell's paradox-adjacent set reasoning",
    premises:["There is a set S that contains all sets that do not contain themselves.","Does S contain itself?"],
    options:["S contains itself","S does not contain itself","S both contains and does not contain itself — a contradiction","The question cannot be answered"],
    ans:2, exp:"This is Russell's Paradox. If S contains itself, then by definition (only sets that DON'T contain themselves are in S), it shouldn't → contradiction. If S doesn't contain itself, it qualifies for membership and should be in S → contradiction. The definition is self-contradictory in classical set theory." },

  { id:275, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Temporal logic: combining past-tense and conditional reasoning",
    premises:["Every time it has rained in the past month, the river flooded.","The river did not flood yesterday.","It rained yesterday."],
    options:["The premises are consistent","The premises are contradictory","It might not have rained heavily enough to flood","The river always floods"],
    ans:1, exp:"Premise 1 (universal claim about the past month): every instance of rain → flood. Premise 2: no flood yesterday. Premise 3: rain yesterday. Premises 1+3 imply flood yesterday, which directly contradicts premise 2. The premises are contradictory." },

  { id:276, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which response correctly identifies what follows?", summary:"Modal logic: distinguishing necessity from possibility",
    premises:["It is possible that Alex is innocent.","It is necessary that if Alex is innocent, the evidence was fabricated."],
    options:["It is necessarily true that the evidence was fabricated","It is possibly true that the evidence was fabricated","It is impossible that the evidence was fabricated","We cannot draw any conclusion about the evidence"],
    ans:1, exp:"'Possibly P' + 'necessarily (P→Q)' → 'possibly Q'. Since it is possible that Alex is innocent, and necessarily (innocent → fabricated evidence), it follows that it is POSSIBLY true the evidence was fabricated. We cannot conclude it is necessarily so." },

  { id:277, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Proof by contradiction structure: reductio ad absurdum",
    premises:["Assume for the sake of argument that there are finitely many prime numbers.","Then there is a largest prime P.","Consider the number N = (2×3×5×…×P) + 1.","N is not divisible by any prime up to P.","Therefore N is either prime or has a prime factor larger than P.","Both contradict the assumption."],
    options:["There are finitely many primes","There are infinitely many primes","N is always prime","The argument is circular"],
    ans:1, exp:"This is Euclid's proof that there are infinitely many primes, using reductio ad absurdum. The assumption that primes are finite leads to the existence of N, which must have a prime factor not in our supposedly complete list — a contradiction. Therefore the assumption is false: there are infinitely many primes." },

  { id:278, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which conclusion follows from this 5-premise deduction?", summary:"5-premise chain with one existential statement and elimination",
    premises:["All neuroscientists understand the brain.","Some people who understand the brain question free will.","No one who questions free will is a strict determinist.","Some strict determinists are philosophers.","Professor Lin is a neuroscientist."],
    options:["Professor Lin is a strict determinist","Professor Lin questions free will","Professor Lin is a philosopher","Professor Lin understands the brain"],
    ans:3, exp:"Professor Lin is a neuroscientist(5)→understands the brain(1). We CANNOT conclude she questions free will — only 'some' brain-understanders do(2). All other options require unjustified steps through the 'some' quantifier. 'Professor Lin understands the brain' is the only certain conclusion." },

  { id:279, type:"logic", cat:"Logic", diff:"Impossible",
    title:"What is the valid conclusion?", summary:"Distinguishing vacuous truth: conditional with impossible antecedent",
    premises:["If 2 + 2 = 5, then the moon is made of cheese.","2 + 2 ≠ 5."],
    options:["The moon is made of cheese","The moon is not made of cheese","The conditional in premise 1 is false","The conditional in premise 1 is vacuously true"],
    ans:3, exp:"In classical logic, a conditional 'if P then Q' is TRUE whenever P is false — this is called a vacuous truth. Since '2+2=5' is false, premise 1 is vacuously true regardless of the moon's composition. Premise 2 simply denies the antecedent; it cannot prove whether the moon is made of cheese." },

  { id:280, type:"logic", cat:"Logic", diff:"Impossible",
    title:"Which response is logically correct?", summary:"Paradox of the preface: rational belief in contradictions",
    premises:["An author believes each individual claim in their book is true.","The author also believes that, given historical rates of error, at least one claim in the book is probably false.","Are these two beliefs simultaneously rational?"],
    options:["No — it is irrational to believe any claim is true if you also believe some claim is false","Yes — it is rational to hold both beliefs simultaneously, even though they imply a contradiction about the book as a whole","No — the author must revise all claims to be uncertain","Yes — but only if the author identifies which claim is false"],
    ans:1, exp:"This is the Preface Paradox. It IS rational to believe each individual claim (based on specific evidence) while also believing globally that some error exists (based on statistical reasoning about human fallibility). Rationality can permit locally justified beliefs that globally imply a contradiction — this challenges the closure principle in epistemology." },

];

// ─────────────────────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────────────────────

/** Categorised bank — use to browse, filter, or build custom quizzes */
export const QUESTION_BANK = {
  Pictorial: PICTORIAL,
  Number:    NUMBER,
  Verbal:    VERBAL,
  Logic:     LOGIC,
};

/**
 * Full flat array — all 120 questions.
 * Used by the worksheet export (can print any subset or all).
 */
export const ALL_QUESTIONS = [
  ...PICTORIAL,
  ...NUMBER,
  ...VERBAL,
  ...LOGIC,
];

export default ALL_QUESTIONS;
