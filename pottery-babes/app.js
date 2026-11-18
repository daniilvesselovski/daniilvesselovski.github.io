const CH={"ar": {"star": 0.986, "mug": 1.185, "bowl": 1.7393, "plate": 1.0035, "kiln": 0.7696, "glaze": 0.8715, "teapot": 1.1306}, "src": {"star-hello": "assets/ch/star-hello.svg", "star-joy": "assets/ch/star-joy.svg", "star-wink": "assets/ch/star-wink.svg", "star-pleased": "assets/ch/star-pleased.svg", "star-surprised": "assets/ch/star-surprised.svg", "star-thinking": "assets/ch/star-thinking.svg", "mug-hello": "assets/ch/mug-hello.svg", "mug-joy": "assets/ch/mug-joy.svg", "mug-wink": "assets/ch/mug-wink.svg", "mug-pleased": "assets/ch/mug-pleased.svg", "mug-surprised": "assets/ch/mug-surprised.svg", "mug-thinking": "assets/ch/mug-thinking.svg", "mug-worried": "assets/ch/mug-worried.svg", "mug-sad": "assets/ch/mug-sad.svg", "bowl-hello": "assets/ch/bowl-hello.svg", "bowl-joy": "assets/ch/bowl-joy.svg", "bowl-wink": "assets/ch/bowl-wink.svg", "bowl-pleased": "assets/ch/bowl-pleased.svg", "bowl-surprised": "assets/ch/bowl-surprised.svg", "bowl-thinking": "assets/ch/bowl-thinking.svg", "plate-hello": "assets/ch/plate-hello.svg", "plate-joy": "assets/ch/plate-joy.svg", "plate-wink": "assets/ch/plate-wink.svg", "plate-pleased": "assets/ch/plate-pleased.svg", "plate-surprised": "assets/ch/plate-surprised.svg", "plate-thinking": "assets/ch/plate-thinking.svg", "kiln-hello": "assets/ch/kiln-hello.svg", "kiln-joy": "assets/ch/kiln-joy.svg", "kiln-wink": "assets/ch/kiln-wink.svg", "kiln-pleased": "assets/ch/kiln-pleased.svg", "kiln-surprised": "assets/ch/kiln-surprised.svg", "kiln-thinking": "assets/ch/kiln-thinking.svg", "kiln-asleep": "assets/ch/kiln-asleep.svg", "kiln-bored": "assets/ch/kiln-bored.svg", "glaze-hello": "assets/ch/glaze-hello.svg", "glaze-joy": "assets/ch/glaze-joy.svg", "glaze-wink": "assets/ch/glaze-wink.svg", "glaze-pleased": "assets/ch/glaze-pleased.svg", "glaze-surprised": "assets/ch/glaze-surprised.svg", "glaze-thinking": "assets/ch/glaze-thinking.svg", "teapot-hello": "assets/ch/teapot-hello.svg", "teapot-joy": "assets/ch/teapot-joy.svg", "teapot-wink": "assets/ch/teapot-wink.svg", "teapot-pleased": "assets/ch/teapot-pleased.svg", "teapot-surprised": "assets/ch/teapot-surprised.svg", "teapot-thinking": "assets/ch/teapot-thinking.svg"}},IMG={"hero": "assets/img/hero.jpg", "belong": "assets/img/belong.jpg", "studio": "assets/img/studio.jpg", "step1": "assets/img/step1.jpg", "step2": "assets/img/step2.jpg", "step3": "assets/img/step3.jpg", "step4": "assets/img/step4.jpg", "w-mug": "assets/img/w-mug.jpg", "w-bowl": "assets/img/w-bowl.jpg", "w-teapot": "assets/img/w-teapot.jpg", "w-cup": "assets/img/w-cup.jpg", "w-jug": "assets/img/w-jug.jpg", "w-cups": "assets/img/w-cups.jpg", "w-first": "assets/img/w-first.jpg", "w-warm": "assets/img/w-warm.jpg"},LOGO={"pb": "assets/logo-pb.svg", "foot": "assets/logo-foot.svg", "full": "assets/logo-full.svg"},SITE=true;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const IC={menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',back:'<path d="M19 12H5m6-6l-6 6 6 6"/>',fwd:'<path d="M5 12h14m-6-6l6 6-6 6"/>',next:'<path d="M9 6l6 6-6 6"/>',prev:'<path d="M15 6l-6 6 6 6"/>',cal:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4m8-4v4"/>',pin:'<path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>'};
const ic=n=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;
const ics=n=>`<span class="ic s">${ic(n)}</span>`;
const TICK='<svg class="tick" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/><path pathLength="1" d="M7 12.4l3.3 3.3L17 9"/></svg>';
const app=$('#app'),stage=$('#stage');
const st={speed:1,rm:matchMedia('(prefers-reduced-motion: reduce)').matches,failLoad:false,failPay:false,wide:false,dev:'phone',S:1,flow:'evening',ev:null,seats:1,name:'',email:'',char:'mug',pname:'',member:false,out:false,cover:'lilac',books:[],profiled:false,loaded:false,view:'list',month:0,busy:false,work:'mug',prof:'mari',filter:'all',stack:[{n:'home',k:'root'}]};
let cur='home';
const ms=n=>n*st.speed;
const OUT='cubic-bezier(.2,.7,.2,1)',INN='cubic-bezier(.6,0,.85,.35)',SOFT='cubic-bezier(.16,1,.3,1)';
const isDesk=()=>stage.clientWidth>=1100;

/* ---- spec ---- */
const SPEC=[
 ['hover','Hover','120 ms, ease-out','One step darker in the colour of the surface it sits on: cocoa on cream, lilac on lilac, blue on blue. Pointer devices only.',0],
 ['press','Pressed','80 ms','Two steps darker and 98% size.',0],
 ['focus','Focus','instant','2 px cocoa ring, 3 px away. Shown for keyboard use, never removed.',0],
 ['forward','Forward in a flow','300 ms, ease-out','Phone and tablet: the new screen slides in from the right, the old one steps back.',0],
 ['back','Back','300 ms, ease-in','The screen slides out to the right.',0],
 ['sheet','Booking sheet','300 ms up, 200 ms down','Rises from the bottom with a soft landing, drops with ease-in.',0],
 ['fade','Screen fade','200 ms','Payment to paying to confirmed, and jumps from the menu.',0],
 ['deskfade','Page change on a computer','220 ms','Cross-fade with a 12 px rise. Nothing slides on a wide screen.',1],
 ['menu','Menu','250 ms fade','Rows follow 45 ms apart.',0],
 ['accordion','Accordion','200 ms','Plus turns into minus. Several rows can stay open.',0],
 ['select','Selected','150 ms','Blue-100 plate, the pattern fades in on it, the 2 px cocoa border sits on top of the pattern, plus a check. Character tiles carry no pattern.',0],
 ['seats','Seat bar','8 × 45 ms, soft spring','Taken seats fill one after another.',0],
 ['skeleton','Skeleton','1.2 s pulse','Cocoa-100 to cocoa-50 while the list loads.',0],
 ['loading','Button loading','18 px spinner','Same width, "One moment", cannot be clicked twice.',0],
 ['error','Error','150 ms','Apricot-100 field, 2 px cocoa border, message under the field. Stays until fixed.',0],
 ['toast','Toast','250 ms in, 4 s, 200 ms out','',0],
 ['sticky','Book button','250 ms','Phone: a bar rises from the bottom. Tablet and computer: the header button turns apricot. Both when the hero card has scrolled away.',0],
 ['tabs','Tab thumb','250 ms, soft spring','List and Month, payment method, language.',1],
 ['enter','Content entrance','300 ms, 50 ms apart','Blocks rise 12 px and fade in while the screen arrives.',1],
 ['reveal','Scroll reveal','300 ms','Sections of the home page, once.',1],
 ['headline','Headline lines','300 ms, 70 ms apart','Home headline rises line by line.',1],
 ['parallax','Hero photo drift','follows scroll at 12%','',1],
 ['header','Header on scroll','200 ms','Computer: the header gets lower once the page moves.',1],
 ['character','Character arrives','460 ms, soft spring','Last on the screen, on the right edge of the block.',1],
 ['charact','Character reacts','1.2 to 2.4 s, faces cross-fade in 180 ms','Computer: on hover. Phone and tablet have no hover, so each character plays its emotion by itself every 5 to 9 s, one at a time, and on tap.',1],
 ['blink','Character idles','every 3 to 6 s','Computer only: a blink or a glance, 160 to 240 ms. The sleeping one breathes.',1],
 ['face','Face change','320 ms','When you pick a character for your profile.',1],
 ['loader','Paying loop','2.2 s loop','The character hops, spins once and smiles until the payment answers.',1],
 ['tick','Check draws','260 ms + 300 ms','Circle lands, then the check is drawn.',1],
 ['month','Calendar month','250 ms','Slides in the direction you go.',1],
 ['number','Number roll','150 ms','Seats, total and faces on a piece.',1],
 ['count','Numbers count up','600 ms','Figures on a profile.',1],
 ['progress','Step bar','300 ms','Fills after the screen has arrived.',1],
 ['shared','A piece opens','320 ms','The photo travels from the grid to its place on the page.',1],
 ['filter','Filter','200 ms, 40 ms apart','The grid cross-fades and pieces rise one by one.',1],
 ['reduced','Reduced motion','150 ms fade','Every movement above becomes a short fade. Faces still change, bodies stay still.',0]];
$('#spec').innerHTML=SPEC.map(s=>`<div data-spec="${s[0]}"><b>${s[1]}</b><span class="tag ${s[4]?'new':''}">${s[4]?'new here':'in the kit'}</span><small>${s[2]}${s[3]?'. '+s[3]:''}</small></div>`).join('');
const fired={};
function fire(id,quiet){const now=performance.now();if(fired[id]&&now-fired[id]<250)return;fired[id]=now;const s=SPEC.find(x=>x[0]===id),r=$(`[data-spec="${id}"]`);if(!s)return;if(!quiet){$('#nowt').textContent=$('#pillt').textContent=s[1];$('#nowd').textContent=$('#pilld').textContent=st.rm&&!['hover','press','focus','loading','skeleton','toast','error'].includes(id)?'150 ms fade (reduced motion)':s[2]+(st.speed>1?', slowed '+st.speed+'×':'')}r.classList.add('hit');requestAnimationFrame(()=>requestAnimationFrame(()=>r.classList.remove('hit')))}

/* ---- data ---- */
const WD=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],WDL=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],MO=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],MOL=['January','February','March','April','May','June','July','August','September','October','November','December'];
const EV=[[11,19,3],[11,20,6],[11,22,2],[11,25,0],[11,26,5],[11,27,8],[11,29,4],[12,3,7],[12,4,8],[12,6,6],[12,10,8],[12,11,7],[12,13,8],[12,17,8],[12,18,8]].map(([m,d,left])=>{const dt=new Date(2026,m-1,d),w=dt.getDay();return{id:''+m+(d<10?'0':'')+d,dt,m,d,w,left,time:w===0?'12:00–14:00':'18:30–20:30',who:(w===4||w===0)?'Arina':'Leila',label:`${WD[w]} ${d} ${MO[m-1]}`}});
const ev=id=>EV.find(e=>e.id===id);
const MONTHS=[[2026,10],[2026,11],[2027,0]];
const seatsHTML=left=>{let h='';for(let i=0;i<8;i++)h+=`<i class="${i<8-left?'t':''}" style="--n:${i}"></i>`;return h};
const leftTxt=l=>l===0?'Full':l===1?'1 seat left':l+' seats left';
const isMine=id=>st.member&&st.books.some(b=>b.id===id);
const nextBook=()=>st.books.map(b=>({...b,e:ev(b.id)})).sort((a,b)=>a.e.dt-b.e.dt)[0];
function addBook(id,how,seats=1){if(!st.books.some(b=>b.id===id))st.books.push({id,how,seats})}
const priceTag=()=>st.member?'<span class="small b">Included</span>':'<span class="num" style="font-size:17px">€30</span>';
function pickHTML(e,sel){if(isMine(e.id))return `<div class="pick mine"><span class="top"><span>${e.label}</span><span class="small b bk">${ic('check')}Booked</span></span><small>${e.time} with ${e.who}</small><span class="seatline"><small style="color:var(--cocoa-800);font-weight:600">You have a seat at this table</small></span></div>`;
 return e.left?`<button class="pick patt${sel?' sel':''}" role="radio" aria-checked="${!!sel}" data-act="pick" data-ev="${e.id}"><span class="top"><span>${e.label}</span>${priceTag()}</span><small>${e.time} with ${e.who}</small><span class="seatline"><span class="seats go" data-taken="${8-e.left}">${seatsHTML(e.left)}</span><small style="color:var(--cocoa-800);font-weight:600">${leftTxt(e.left)}</small></span><span class="badge">${ic('check')}</span></button>`
 :`<button class="pick full" data-act="wait" data-ev="${e.id}"><span class="top"><span>${e.label}</span><span class="small b">Full</span></span><small>${e.time} with ${e.who}</small><span class="seatline"><span class="link" style="padding:0;color:var(--cocoa-800)">Join the waiting list</span></span></button>`}
const CHARS=[['star','Star','hello'],['mug','Mug','joy'],['bowl','Bowl','pleased'],['plate','Plate','thinking'],['kiln','Kiln','wink'],['glaze','Glaze','surprised'],['teapot','Teapot','hello']];
const chE=c=>CHARS.find(a=>a[0]===c)[2];
const MEMS=[{id:'mari',n:'Mari Tamm',f:'Mari',c:'mug',e:'joy',sf:'s-lilac',evs:5,cv:'lilac'},{id:'kert',n:'Kert',f:'Kert',c:'star',e:'hello',sf:'s-blue',evs:3,cv:'blue'},{id:'liis',n:'Liis',f:'Liis',c:'bowl',e:'pleased',sf:'s-c50',evs:2,cv:'sand'},{id:'anna',n:'Anna',f:'Anna',c:'teapot',e:'wink',sf:'s-lilac',evs:4,cv:'cocoa'}];
function mem(id){const m=MEMS.find(x=>x.id===id);if(id==='mari'&&st.member)return{...m,me:true,n:st.pname||st.name||m.n,f:'You',c:st.char,e:chE(st.char)};return m}
const WORKS=[
 {id:'mug',t:'Morning mug',by:'mari',kind:'mug',shelf:24,r:.89,d:'Stoneware, brown dip glaze. Made 12 Nov 2026.',f:[12,4,2]},
 {id:'bowl',t:'Wavy bowl',by:'liis',kind:'bowl',r:1.21,d:'Stoneware, clear glaze over a pinched rim. Made 14 Nov 2026.',f:[9,3,5]},
 {id:'teapot',t:'Red teapot',by:'anna',kind:'other',r:.99,d:'Stoneware, iron red glaze. Made 13 Nov 2026.',f:[14,6,7]},
 {id:'cup',t:'Speckled cup',by:'kert',kind:'mug',r:1.21,d:'Speckled clay, white glaze inside. Made 11 Nov 2026.',f:[6,2,1]},
 {id:'jug',t:'Blue jug',by:'anna',kind:'other',r:.845,d:'Stoneware, blue dip glaze. Made 16 Nov 2026.',f:[8,5,3]},
 {id:'cups',t:'Checked cups',by:'mari',kind:'mug',shelf:18,r:1.06,d:'A pair, underglaze checks. Made 15 Nov 2026.',f:[7,3,0]},
 {id:'first',t:'First mug',by:'mari',kind:'mug',r:1.21,d:'The first one off the table. Made 9 Nov 2026.',f:[10,6,1]},
 {id:'warm',t:'Handwarmer',by:'mari',kind:'mug',r:.99,d:'No handle, thick walls. Made 17 Nov 2026.',f:[4,1,2]}];
WORKS.forEach(w=>w.img='w-'+w.id);
const work=id=>WORKS.find(w=>w.id===id);
const REACT={};
const FACES=[['mug','joy'],['star','wink'],['bowl','surprised']];
const chHTML=(c,e,cls='eq',extra='')=>`<span class="ch ${cls}" data-c="${c}" data-e="${e}" ${extra}></span>`;
function wcardHTML(w,i,attr='data-in'){const m=mem(w.by);return `<button class="wcard" ${attr} style="--i:${i};--r:${w.r}" data-act="work" data-id="${w.id}"><span class="ph"><img data-img="${w.img}" alt="${w.t}"></span><b>${w.t}</b><small>${m.me?'yours':'by '+m.f}${w.shelf?', on the shelf €'+w.shelf:''}</small></button>`}
const memHTML=m=>`<button class="mem" data-act="member-profile" data-id="${m.id}" data-chhost><span class="av ${m.sf}">${chHTML(m.c,m.e)}</span>${m.f}</button>`;
const memsHTML=()=>MEMS.map(m=>memHTML(mem(m.id))).join('')+'<span class="mem more"><span class="av">+13</span>others</span>';

/* ---- characters ---- */
const EQK={star:1.08,teapot:1.2,bowl:.96,kiln:1.25,plate:1.04};
const OPT={mug:[6,1],star:[-2,-1],bowl:[0,6],kiln:[0,-6],glaze:[0,-1.5],teapot:[-1,-8]};
const SEQ={hello:[['pleased',0],['joy',380],['hello',1050]],joy:[['hello',0],['joy',400],['hello',820],['joy',1220]],wink:[['hello',0],['wink',400],['hello',950],['wink',1380]],pleased:[['hello',0],['joy',400],['pleased',1050]],thinking:[['hello',0],['surprised',440],['joy',960],['thinking',1600]],surprised:[['hello',0],['surprised',360],['hello',860],['surprised',1240]],asleep:[['bored',0],['surprised',460],['hello',980],['pleased',1600],['asleep',2400]],worried:[['sad',0],['worried',420],['surprised',860],['worried',1400]]};
const MOVE={hello:'wobble',joy:'hop2',wink:'tilt',pleased:'sway',thinking:'tilt',surprised:'hop',asleep:'shake',worried:'shiver'};
const IDLE={hello:[['pleased',0],['hello',170]],joy:[['pleased',0],['joy',200]],wink:[['hello',0],['wink',240]],pleased:[['hello',0],['pleased',220]],thinking:[['hello',0],['thinking',240]],surprised:[['hello',0],['surprised',200]],worried:[['sad',0],['worried',240]]};
const R=(d)=>`rotate(${d}deg)`,HOP=(y,sx,sy)=>`translateY(${y}%) scale(${sx},${sy})`;
const EIO='cubic-bezier(.45,0,.55,1)',EUP='cubic-bezier(.25,.6,.4,1)',EDN='cubic-bezier(.6,0,.75,.4)';
const BODY={wobble:{d:1150,k:[{transform:R(0)},{transform:R(-6),offset:.25},{transform:R(5),offset:.55},{transform:R(-2),offset:.8},{transform:R(0)}]},
 hop2:{d:1300,k:[{transform:HOP(0,1,1)},{transform:HOP(0,1.06,.92),offset:.12,easing:EUP},{transform:HOP(-16,.97,1.04),offset:.32,easing:EDN},{transform:HOP(0,1.05,.94),offset:.5,easing:EUP},{transform:HOP(-9,.98,1.02),offset:.68,easing:EDN},{transform:HOP(0,1.03,.97),offset:.86},{transform:HOP(0,1,1)}]},
 hop:{d:900,k:[{transform:HOP(0,1,1)},{transform:HOP(0,1.06,.92),offset:.18,easing:EUP},{transform:HOP(-14,.97,1.04),offset:.48,easing:EDN},{transform:HOP(0,1.04,.95),offset:.8},{transform:HOP(0,1,1)}]},
 tilt:{d:1380,k:[{transform:R(0)},{transform:R(8),offset:.32},{transform:R(8),offset:.66},{transform:R(0)}]},
 sway:{d:1300,k:[{transform:R(0)},{transform:R(-5),offset:.3},{transform:R(5),offset:.66},{transform:R(0)}]},
 shake:{d:1100,k:[{transform:R(0)},{transform:R(-4),offset:.16},{transform:R(4),offset:.36},{transform:R(-3),offset:.56},{transform:R(2),offset:.76},{transform:R(0)}]},
 shiver:{d:950,k:[{transform:'translateX(0)'},{transform:'translateX(-3%)',offset:.16},{transform:'translateX(3%)',offset:.36},{transform:'translateX(-3%)',offset:.56},{transform:'translateX(2%)',offset:.76},{transform:'translateX(0)'}]}};
Object.values(BODY).forEach(B=>B.k.forEach(k=>{if(!k.easing)k.easing=EIO}));
function frame(el,e){const c=el.dataset.c,key=CH.src[c+'-'+e]?c+'-'+e:c+'-hello';let im=[...el._b.children].find(x=>x.dataset.f===key);if(!im){im=new Image();im.dataset.f=key;im.alt='';im.draggable=false;im.src=CH.src[key];el._b.append(im)}return im}
function showFrame(el,e,fade){if(!el._b)return;const im=frame(el,e),c=el.dataset.c;el._want=im;
 const sw=()=>{if(el._want!==im)return;const old=el._cur;el._cur=im;if(old===im&&im.classList.contains('on'))return;const z=el._z=(el._z||0)+1;im.style.zIndex=z;im.classList.add('on');
  const clean=()=>{[...el._b.children].forEach(x=>{if(x!==im&&(+x.style.zIndex||0)<z){x.classList.remove('on');if(!x.dataset.f.startsWith(el.dataset.c+'-'))x.remove()}})};
  if(fade&&old&&old!==im&&!st.rm&&old.dataset.f.startsWith(c+'-'))im.animate([{opacity:0},{opacity:1}],{duration:ms(fade),easing:EIO}).finished.then(clean,clean);else clean()};
 (im.complete&&im.naturalWidth)?sw():im.addEventListener('load',sw,{once:true})}
function applyCh(el){const c=el.dataset.c,o=OPT[c]||[0,0];el.style.setProperty('--ar',CH.ar[c]);el.style.setProperty('--eqh',Math.sqrt((EQK[c]||1)/CH.ar[c]).toFixed(4));el.style.setProperty('--ox',o[0]+'%');el.style.setProperty('--oy',o[1]+'%');showFrame(el,el.dataset.e)}
function preload(el){if(!el.isConnected)return;const e=el.dataset.e;[...(SEQ[e]||[]),...(IDLE[e]||[])].forEach(x=>frame(el,x[0]))}
function mountCh(el){const b=document.createElement('span');b.className='ch-b';el.textContent='';el.append(b);el._b=b;applyCh(el);setTimeout(()=>preload(el),400+Math.random()*600)}
function setCh(el,c,e,an){if(!el._b){el.dataset.c=c;el.dataset.e=e;mountCh(el)}else{el.dataset.c=c;el.dataset.e=e;applyCh(el);setTimeout(()=>preload(el),200)}if(an){fire('face');if(!st.rm)el._b.animate([{transform:'scale(1,1)'},{transform:'scale(1.08,.9)',offset:.35},{transform:'scale(.97,1.04)',offset:.7},{transform:'scale(1,1)'}],{duration:ms(320),easing:EIO})}}
const autoMode=()=>st.dev!=='desktop'||matchMedia('(hover: none)').matches;
const rest=()=>autoMode()?5000+Math.random()*4000:3000+Math.random()*3500;
function play(el,seq,move,fade=180){if(el._busy||!el._b)return;el._busy=true;seq.forEach(([f,t])=>setTimeout(()=>showFrame(el,f,fade),ms(t)));let end=seq[seq.length-1][1]+460;if(move&&!st.rm){const B=BODY[move];el._b.animate(B.k,{duration:ms(B.d)});end=Math.max(end,B.d)}setTimeout(()=>{showFrame(el,el.dataset.e,fade);el._busy=false;el._next=performance.now()+rest()},ms(end))}
function act(el,quiet){if(!el||!el._b||el._busy||el.id==='loaderch')return;const e=el.dataset.e;fire('charact',quiet);play(el,SEQ[e]||SEQ.hello,MOVE[e]||'wobble')}
let autoGate=0;
setInterval(()=>{if(st.rm||document.hidden||st.busy)return;const now=performance.now(),auto=autoMode(),sr=stage.getBoundingClientRect(),roots=[$('#s-'+cur)];if($('#menu').classList.contains('on'))roots.push($('#menu'));roots.forEach(r=>$$('.ch',r).forEach(el=>{if(el._busy||!el._b||el.id==='loaderch')return;if(!el._next){el._next=now+1400+Math.random()*(auto?5000:3500);return}if(now<el._next)return;const b=el.getBoundingClientRect();if(!b.width||b.bottom<sr.top+20||b.top>sr.bottom-20){el._next=now+900;return}
 if(auto){if(now<autoGate){el._next=now+300+Math.random()*500;return}autoGate=now+1300;act(el,1);return}
 el._next=now+rest();const s=IDLE[el.dataset.e];if(!s)return;fire('blink',1);play(el,s,null,90)}))},500);

/* ---- assets ---- */
function hydrate(root=document){$$('[data-ic]',root).forEach(e=>{if(!e.firstChild)e.innerHTML=ic(e.dataset.ic)});$$('[data-img]',root).forEach(e=>{if(!e.getAttribute('src'))e.src=IMG[e.dataset.img]});$$('[data-logo]',root).forEach(e=>{if(!e.getAttribute('src'))e.src=LOGO[e.dataset.logo]});$$('.ch[data-c]',root).forEach(e=>{if(!e._b)mountCh(e)});$$('.seats',root).forEach(e=>{if(!e.firstChild)e.innerHTML=seatsHTML(8-(+e.dataset.taken))})}
function probe(el,end){const p=document.createElement('span');p.style.cssText='display:inline-block;width:0;height:0';end?el.append(p):el.prepend(p);const y=p.getBoundingClientRect().bottom;p.remove();return y}
function fit(root=document){
 $$('.lockup',root).forEach(l=>{const h=$('.h1',l),c=$(':scope>.ch,:scope>.chbox',l);if(!h||!c||!h.offsetHeight)return;const cs=getComputedStyle(h),fs=parseFloat(cs.fontSize),lh=parseFloat(cs.lineHeight)||fs,cap=fs*.699,auto=l.classList.contains('auto');
  const lines=()=>Math.max(1,Math.round(h.offsetHeight/lh));
  const blk=()=>{const last=auto?$(':scope>p',l):$('.lk-t',l).lastElementChild,max=+l.dataset.max||150;for(let i=0;i<3;i++){const top=h.getBoundingClientRect().top,base=(probe(h)-top)/st.S,bot=(probe(last,1)-top)/st.S;c.style.setProperty('--h',Math.min(max,bot-(base-cap)).toFixed(1)+'px');c.style.marginTop=Math.max(0,base-cap).toFixed(1)+'px'}};
  if(l.classList.contains('blk')){blk();return}
  /* auto: a one-line headline takes the character as tall as headline plus text; a longer one takes it as tall as the headline */
  if(auto){l.classList.add('one');blk();if(lines()===1)return;l.classList.remove('one');c.style.setProperty('--h',(lh+cap).toFixed(1)+'px')}
  for(let i=0;i<2;i++){const base=(probe(h)-h.getBoundingClientRect().top)/st.S;c.style.setProperty('--h',((lines()-1)*lh+cap).toFixed(1)+'px');c.style.marginTop=Math.max(0,base-cap).toFixed(1)+'px'}});
 $$('.duo',root).forEach(d=>{const t=$('.duo-t',d),c=$('.ch',d);if(t&&c&&t.offsetHeight)c.style.setProperty('--h',t.offsetHeight+'px')})}

/* ---- header ---- */
const NAV=[['nav-book','Evenings'],['nav-member','Membership'],['nav-made','Made here'],['nav-find','Find us']];
function bars(){$$('[data-bar]').forEach(h=>{h.innerHTML=`<button class="logo" data-act="home" aria-label="Pottery Babes, home"><img class="lg-pb" data-logo="pb" alt=""><img class="lg-full" data-logo="full" alt=""></button><nav class="nav" aria-label="Main">${NAV.map(n=>`<button data-act="${n[0]}">${n[1]}</button>`).join('')}</nav><div class="bar-r"><button class="lang lang1" data-act="lang-toast">EN</button><span class="langs">${['EN','ET','RU'].map((l,i)=>`<button class="lang${i?'':' on'}" data-act="lang-toast">${l}</button>`).join('')}</span><button class="lang login" data-act="login" data-guest>Log in</button><button class="btn quiet fit hbook" data-act="book">Book an evening</button><button class="avatar s-lilac" data-act="nav-profile" aria-label="Your profile" data-chhost data-mem>${chHTML(st.char,'hello')}</button><button class="icon menu-b" data-act="menu" aria-label="Menu">${ic('menu')}</button></div>`})}
function syncMember(first){stage.classList.toggle('is-member',st.member);$$('.avatar').forEach(a=>{const c=$('.ch',a);c._b?setCh(c,st.char,'hello'):(c.dataset.c=st.char)});$('#welprofile').textContent=st.profiled?'See your profile':'Set up your profile';const wa=$('#welavatar');wa.hidden=!st.profiled;if(st.profiled)setCh(wa,st.char,'hello');homeList(first);if(!first)homeCommunity();const nb=st.member&&nextBook();$('#nextinc').textContent=isMine('1119')?'Booked':'Included';$$('.mynext').forEach(x=>x.textContent=nb?`Your next evening: ${nb.e.label}`:x.dataset.d);syncSw()}
function homeList(first){const hl=$('#homelist');hl.innerHTML=EV.slice(0,4).map((e,i)=>{const mine=isMine(e.id);return `<button class="rowbtn" data-reveal style="--i:${i}" data-act="${mine?'nav-profile':e.left?'book':'wait'}" data-ev="${e.id}"><span><b>${e.label}</b><small>${e.time} with ${e.who}</small></span><span class="meta">${mine?'You are booked':e.left?e.left+' left':'Full, waiting list'}<span class="ic s chev">${ic('next')}</span></span></button><div class="evc" data-reveal style="--i:${i}">${pickHTML(e,false).replace('data-act="pick"','data-act="book"').replace(' role="radio" aria-checked="false"','')}</div>`}).join('');if(!first){$$('[data-reveal]',hl).forEach(e=>e.classList.add('in'));hydrate(hl)}}
const guest=()=>{if(st.member){st.member=false;st.out=true;syncMember()}};
const asMember=()=>{st.member=true;st.out=false;syncMember()};

/* ---- navigation ---- */
const scr=n=>$('#s-'+n);
const T={forward:{d:300,e:OUT,top:'b',b:[{transform:'translateX(100%)'},{transform:'none'}],a:[{transform:'none',opacity:1},{transform:'translateX(-22%)',opacity:.35}]},
 back:{d:300,e:INN,top:'a',a:[{transform:'none'},{transform:'translateX(100%)'}],b:[{transform:'translateX(-22%)',opacity:.35},{transform:'none',opacity:1}]},
 sheet:{d:300,e:SOFT,top:'b',b:[{transform:'translateY(100%)'},{transform:'none'}],a:[{transform:'none',opacity:1},{transform:'scale(.96)',opacity:.4}]},
 sheetClose:{d:200,e:INN,top:'a',spec:'sheet',a:[{transform:'none'},{transform:'translateY(100%)'}],b:[{transform:'scale(.96)',opacity:.4},{transform:'none',opacity:1}]},
 fade:{d:200,e:OUT,top:'b',b:[{opacity:0},{opacity:1}],a:[{opacity:1},{opacity:1}]},
 shared:{d:320,e:OUT,top:'b',b:[{opacity:0},{opacity:1}],a:[{opacity:1},{opacity:1}]},
 deskfade:{d:220,e:OUT,top:'b',spec:'deskfade',b:[{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],a:[{opacity:1},{opacity:1}]}};
const prep={},after={},leave={};
function swap(el,fn){if(st.rm){fn();return}el.animate([{opacity:1},{opacity:0}],{duration:ms(160),easing:OUT,fill:'forwards'}).finished.then(a=>{fn();a.cancel();el.animate([{opacity:0},{opacity:1}],{duration:ms(200),easing:OUT})})}
function shown(b){$$('[data-in],.hl,.hero-img',b).forEach(e=>e.classList.add('in'));$$('.seats',b).forEach(e=>e.classList.add('go'))}
function rel(el){const r=el.getBoundingClientRect(),s=stage.getBoundingClientRect();return{x:(r.left-s.left)/st.S,y:(r.top-s.top)/st.S,w:r.width/st.S,h:r.height/st.S}}
function go(to,kind='forward',o={}){
 if(st.busy)return false;const fresh=!o.isBack;
 if(to===cur){if(!o.re)return false;const b=scr(to),s=$('.scroll',b)||b;fire('fade');st.busy=true;const fn=()=>{if(prep[to])prep[to](o);hydrate(b);fit(b);s.scrollTop=0;$$('[data-in]',b).forEach(e=>e.classList.remove('in'));st.busy=false;requestAnimationFrame(()=>requestAnimationFrame(()=>{enter(b);if(after[to])after[to](o)}))};st.rm?fn():s.animate([{opacity:1},{opacity:0}],{duration:ms(160),easing:OUT,fill:'forwards'}).finished.then(a=>{fn();a.cancel();s.animate([{opacity:0},{opacity:1}],{duration:ms(200),easing:OUT})});return true}
 st.busy=true;const from=cur,a=scr(cur),b=scr(to);let t=T[kind];$('#toast').classList.remove('on');
 const src=o.shared&&!st.rm?rel(o.shared):null;
 if(prep[to])prep[to](o);
 if(fresh){$$('[data-in],.hl,.hero-img',b).forEach(e=>e.classList.remove('in'));$$('.seats',b).forEach(e=>{if(!e.closest('.pick'))e.classList.remove('go')})}
 b.hidden=false;hydrate(b);if(!fresh)shown(b);fit(b);
 if(fresh){const s=$('.scroll',b);if(s)s.scrollTop=0}
 if(isDesk()&&kind!=='shared')t=T.deskfade;
 fire(t.spec||kind);
 if(st.rm)t={d:150,e:'linear',top:'b',b:[{opacity:0},{opacity:1}],a:[{opacity:1},{opacity:1}]};
 a.style.zIndex=t.top==='a'?2:1;b.style.zIndex=t.top==='b'?2:1;
 const opt={duration:ms(t.d),easing:t.e,fill:'both'};
 const A=a.animate(t.a,opt),B=b.animate(t.b,opt);
 if(src){const tgt=$('.wphoto img',b);if(tgt){const d=rel(tgt),g=new Image();g.className='ghost';g.src=tgt.src;g.alt='';stage.append(g);tgt.style.visibility='hidden';g.animate([{left:src.x+'px',top:src.y+'px',width:src.w+'px',height:src.h+'px',borderRadius:'14px'},{left:d.x+'px',top:d.y+'px',width:d.w+'px',height:d.h+'px',borderRadius:'16px'}],{duration:ms(320),easing:SOFT,fill:'both'}).finished.then(()=>{tgt.style.visibility='';g.remove()})}}
 if(fresh)setTimeout(()=>enter(b),ms(60));
 Promise.all([A.finished,B.finished]).then(()=>{a.hidden=true;A.cancel();B.cancel();a.style.zIndex=b.style.zIndex='';cur=to;st.busy=false;if(leave[from])leave[from]();if(after[to])after[to](o)});
 return true}
function enter(b){shown(b);if($('[data-in]',b))fire('enter');if($('.ch.pop',b))setTimeout(()=>fire('character'),ms(250));if($('.tick',b))setTimeout(()=>fire('tick'),ms(120))}
function push(to,k,o={}){if(to===cur)o={...o,re:1};if(go(to,k,o)){const so={...o};delete so.shared;delete so.re;st.stack.push({n:to,k,o:so})}}
function back(){if(st.stack.length<2||st.busy)return;const top=st.stack[st.stack.length-1],prev=st.stack[st.stack.length-2],o={...(prev.o||{}),isBack:1};if(prev.n===top.n)o.re=1;if(go(prev.n,top.k==='sheet'?'sheetClose':(top.k==='fade'||top.k==='shared')?'fade':'back',o))st.stack.pop()}
function closeFlow(){if(st.busy)return;let i=st.stack.length-1;while(i>0&&st.stack[i].k!=='sheet')i--;if(i<1)i=1;const prev=st.stack[i-1];if(go(prev.n,'sheetClose',{...(prev.o||{}),isBack:1}))st.stack.length=i}
function home(){if(cur==='home')return $('#homescroll').scrollTo({top:0,behavior:st.rm?'auto':'smooth'});if(go('home','fade'))st.stack.length=1}
function page(n,o={}){menu(false);if(cur===n&&!o.re)return;if(go(n,'fade',o))st.stack=[{n:'home',k:'root'},{n,k:'fade',o}]}

/* ---- flow header ---- */
function flowbar(scrn,step,total,firstStep){const el=$('[data-flowbar]',scr(scrn));el.innerHTML=`<div class="row1"><button class="icon" data-act="${firstStep?'close':'back'}" aria-label="Back">${ic('back')}</button><span class="t">Step ${step} of ${total}</span><button class="icon" data-act="close" aria-label="Close">${ic('x')}</button></div><div class="prog">${Array.from({length:total},(_,i)=>`<i class="${i<step-1?'was on':''}"></i>`).join('')}</div>`;el.dataset.step=step}
function plainbar(scrn,title){const el=$('[data-flowbar]',scr(scrn));el.innerHTML=`<div class="row1"><span style="width:44px"></span><span class="t">${title}</span><button class="icon" data-act="close" aria-label="Close">${ic('x')}</button></div>`;el.dataset.step=0}
function progOn(scrn){const el=$('[data-flowbar]',scr(scrn)),i=$$('.prog i',el)[el.dataset.step-1];if(i&&!i.classList.contains('on')){i.classList.add('on');fire('progress')}}
['book','details','pay'].forEach(n=>after[n]=()=>progOn(n));

/* ---- booking ---- */
function openBooking(evId,view){st.flow='evening';st.ev=evId&&!isMine(evId)?evId:null;st.seats=1;st.view=view||'list';if(evId){const e=ev(evId);st.month=MONTHS.findIndex(m=>m[1]===e.m-1)}else st.month=0;push('book','sheet')}
prep.book=()=>{st.member?plainbar('book','Book an evening'):flowbar('book',1,3,true);if(st.ev&&isMine(st.ev))st.ev=null;setSeg($('#viewseg'),st.view==='list'?0:1,true);const body=$('#bookbody');if(!st.loaded||st.failLoad){body.innerHTML='<div class="skel"><i></i><i></i><i></i></div>';fire('skeleton')}else renderBook();bookFoot(true)};
const afterBook=after.book;
after.book=()=>{afterBook();if(!st.loaded||st.failLoad)loadList()};
function loadList(){const body=$('#bookbody');setTimeout(()=>{swap(body,()=>{if(st.failLoad){st.failLoad=false;syncSw();st.ev=null;bookFoot();body.innerHTML=`<div class="emptycard s-c50"><div class="duo"><div class="duo-t"><b style="font-size:16px">The evenings did not load</b><br><span class="small mute">Your connection may have dropped. Nothing is lost.</span></div>${chHTML('mug','worried','pop in')}</div><button class="btn quiet" data-act="retry">Try again</button></div>`;hydrate(body);fit(body)}else{st.loaded=true;renderBook(true)}})},900)}
function stagger(box,sel){const xs=$$(sel,box);xs.forEach((p,i)=>{p.dataset.in='';p.style.setProperty('--i',i);p.classList.remove('in')});requestAnimationFrame(()=>requestAnimationFrame(()=>xs.forEach(p=>p.classList.add('in'))))}
function renderBook(stag){const body=$('#bookbody');if(st.view==='list'){body.innerHTML=`<div class="list" role="radiogroup" aria-label="Evenings">${EV.filter(e=>e.m===11).map(e=>pickHTML(e,e.id===st.ev)).join('')}</div><button class="link" style="margin:6px 0 0 -6px" data-act="view" data-view="month">See December in the calendar</button>`;if(stag){stagger(body,'.pick');$$('.seats',body).forEach(s=>s.classList.remove('go'));requestAnimationFrame(()=>requestAnimationFrame(()=>{$$('.seats',body).forEach(s=>s.classList.add('go'));fire('seats')}))}}else{body.innerHTML=`<div class="cal"><div class="calhead"><button class="icon" data-act="cal" data-d="-1" aria-label="Previous month">${ic('prev')}</button><div class="ttl" id="calttl" aria-live="polite"></div><button class="icon" data-act="cal" data-d="1" aria-label="Next month">${ic('next')}</button></div><div class="wk">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<span>${d}</span>`).join('')}</div><div class="gridwrap"><div class="grid" id="calgrid"></div></div><div class="legend"><span><i style="background:var(--blue-100)"></i>Evening with free seats</span><span><i style="background:var(--cocoa-50)"></i>Full</span>${st.member&&st.books.length?'<span><i style="background:var(--lilac-200)"></i>Booked by you</span>':''}</div><div id="calday" style="margin-top:14px"></div></div>`;renderMonth(0)}hydrate(body)}
function gridHTML(mi){const [y,m]=MONTHS[mi],first=(new Date(y,m,1).getDay()+6)%7,n=new Date(y,m+1,0).getDate();let h='';for(let i=0;i<first;i++)h+='<span></span>';for(let d=1;d<=n;d++){const e=EV.find(x=>x.m===m+1&&x.d===d&&y===2026);const today=y===2026&&m===10&&d===18;const mn=e&&isMine(e.id);h+=e?`<button class="day ${mn?'has mine':e.left?'has':'full'}${e.id===st.ev?' sel':''}${today?' today':''}" data-act="${mn||e.left?'pick':'wait'}" data-ev="${e.id}" aria-label="${e.label}, ${mn?'you are booked':leftTxt(e.left)}">${d}</button>`:`<span class="day${today?' today':''}">${d}</span>`}return h}
function renderMonth(dir){const [y,m]=MONTHS[st.month],g=$('#calgrid'),t=$('#calttl');const name=`${MOL[m]} ${y}`;const prevB=$('[data-act="cal"][data-d="-1"]'),nextB=$('[data-act="cal"][data-d="1"]');prevB.disabled=st.month===0;nextB.disabled=st.month===MONTHS.length-1;prevB.style.opacity=st.month===0?.3:1;nextB.style.opacity=st.month===MONTHS.length-1?.3:1;
 const ns=document.createElement('span');ns.textContent=name.toUpperCase();const os=t.firstElementChild;t.append(ns);
 if(dir&&!st.rm){fire('month');const d=ms(250);g.animate([{transform:'none',opacity:1},{transform:`translateX(${-dir*30}%)`,opacity:0}],{duration:d/2,easing:INN}).finished.then(()=>{g.innerHTML=gridHTML(st.month);g.animate([{transform:`translateX(${dir*30}%)`,opacity:0},{transform:'none',opacity:1}],{duration:d/2,easing:OUT})});if(os){os.animate([{transform:'none',opacity:1},{transform:`translateY(${-dir*100}%)`,opacity:0}],{duration:d,easing:OUT}).finished.then(()=>os.remove())}ns.animate([{transform:`translateY(${dir*100}%)`,opacity:0},{transform:'none',opacity:1}],{duration:d,easing:OUT})}
 else{if(dir)fire('month');g.innerHTML=gridHTML(st.month);if(os)os.remove()}
 renderDay()}
function renderDay(){const el=$('#calday');if(!el)return;const [y,m]=MONTHS[st.month];const e=st.ev&&ev(st.ev);let h='';
 if(y===2027){h=`<form class="emptycard s-blue" id="notify" novalidate><div class="duo"><div class="duo-t"><b style="font-size:16px">No evenings in January yet</b><br><span class="small">Leave your email and we will write when the dates open.</span></div>${chHTML('kiln','asleep','','id="kiln"')}</div><label class="f"><span>Email</span><input name="email" type="email" inputmode="email" autocomplete="off" placeholder="you@example.com"><em class="err"><span><i>!</i>This email looks unfinished</span></em></label><button type="button" class="btn quiet" data-act="notify">Tell me when dates open</button></form>`}
 else if(e&&e.m===m+1){h=pickHTML(e,true)}
 else h=`<p class="small mute">Pick a marked day to see the time and the seats.</p>`;
 swap(el,()=>{el.innerHTML=h;hydrate(el);fit(el);$$('.seats',el).forEach(s=>{s.classList.remove('go');requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add('go')))})})}
function bookFoot(instant){const e=st.ev&&ev(st.ev),s=$('#bookstatus'),b=$('#bookgo'),m=st.member,mine=e&&isMine(e.id),lbl=!e?'Pick an evening':mine?'Already booked':m?'Book this evening':'Continue';const set=()=>{s.innerHTML=!e?'No evening chosen yet':mine?`You have a seat on <b>${e.label}</b>`:`<b>${e.label}</b>, ${e.time} with ${e.who}${m?'. Included in your membership':''}`;b.disabled=!e||mine;b.textContent=lbl};instant?set():swap(s,set);if(!instant){b.disabled=!e||mine;b.textContent=lbl}}
function memberBook(btn,id){load(btn,700,()=>{st.flow='evening';st.ev=id;st.seats=1;addBook(id,'member');syncMember();if(go('confirmed','fade'))st.stack=[{n:'home',k:'root'},{n:'confirmed',k:'fade'}]})}
function pick(id){st.ev=st.ev===id?null:id;fire('select');$$('#bookbody .pick[data-ev]').forEach(p=>{const on=p.dataset.ev===st.ev;p.classList.toggle('sel',on);p.setAttribute('aria-checked',on)});$$('#bookbody .day[data-ev]').forEach(p=>p.classList.toggle('sel',p.dataset.ev===st.ev));if(st.view==='month')renderDay();bookFoot()}

/* ---- details ---- */
const money=()=>st.flow==='member'?180:30*st.seats;
prep.details=(o={})=>{const m=st.flow==='member';flowbar('details',m?1:2,m?2:3,m);$('#dethl').textContent=m?'Create your account':'Your details';$('#passrow').hidden=!m;$('#haveacc').hidden=!m;const e=ev(st.ev);$('#detsum1').textContent=m?'Membership, one month':`${e.label}, ${e.time}`;$('#detsum2').textContent=m?'17 Nov to 16 Dec':`With ${e.who}, Ankru 8`;$('#seatsrow').hidden=m;if(!m){st.seats=Math.min(st.seats,e.left);$('#seatn').textContent=st.seats;$('#seatsleft').textContent=leftTxt(e.left);seatBtns()}$('#dettotal').textContent='€'+money();const f=$('#detform');f.name.value=st.name;f.email.value=st.email;if(!o.isBack||!m)f.pass.value='';$$('.f',f).forEach(x=>x.classList.remove('bad'))};
function seatBtns(){const e=ev(st.ev),[a,b]=$$('#seatsrow .stepper button');a.disabled=st.seats<=1;b.disabled=st.seats>=Math.min(e.left,4)}
function count(el,from,to,dur,pre=''){const t0=performance.now();dur=st.rm?0:ms(dur);(function tick(now){const p=dur?Math.min(1,(now-t0)/dur):1;el.textContent=pre+Math.round(from+(to-from)*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick)})(t0)}
function seat(d){const e=ev(st.ev),n=Math.max(1,Math.min(Math.min(e.left,4),st.seats+d));if(n===st.seats)return;const from=30*st.seats;st.seats=n;fire('number');const b=$('#seatn');if(st.rm){b.textContent=n}else{const o=b.cloneNode(true);o.removeAttribute('id');b.parentNode.append(o);b.textContent=n;o.animate([{transform:'none',opacity:1},{transform:`translateY(${-d*100}%)`,opacity:0}],{duration:ms(150),easing:OUT}).finished.then(()=>o.remove());b.animate([{transform:`translateY(${d*100}%)`,opacity:0},{transform:'none',opacity:1}],{duration:ms(150),easing:OUT})}
 count($('#dettotal'),from,30*n,200,'€');seatBtns()}
function roll(box,txt,d){const o=$('b',box);if(st.rm){o.textContent=txt;return}const n=document.createElement('b');n.textContent=txt;box.append(n);o.animate([{transform:'none',opacity:1},{transform:`translateY(${-d*100}%)`,opacity:0}],{duration:ms(150),easing:OUT,fill:'forwards'});n.animate([{transform:`translateY(${d*100}%)`,opacity:0},{transform:'none',opacity:1}],{duration:ms(150),easing:OUT}).finished.then(()=>o.remove())}
const okMail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
function check(form,names){let ok=true;names.forEach(n=>{const i=form[n],good=n==='email'?okMail(i.value):n==='pass'?i.value.length>=8:i.value.trim().length>1,f=i.closest('.f');if(!good&&!f.classList.contains('bad'))fire('error');f.classList.toggle('bad',!good);i.setAttribute('aria-invalid',!good);if(!good&&ok)i.focus();ok=ok&&good});return ok}
document.addEventListener('input',e=>{const f=e.target.closest('.f.bad');if(!f)return;const i=e.target,good=i.type==='email'?okMail(i.value):i.name==='pass'?i.value.length>=8:i.value.trim().length>1;if(good){f.classList.remove('bad');i.removeAttribute('aria-invalid')}});

/* ---- pay ---- */
prep.pay=()=>{const m=st.flow==='member';flowbar('pay',m?2:3,m?2:3,false);const e=ev(st.ev);$('#paysum1').textContent=m?'Membership, one month':`${e.label}, ${e.time}`;$('#paysum2').textContent=m?st.email:`${st.seats} ${st.seats>1?'seats':'seat'}, ${st.email}`;$('#paytotal').textContent=$('#paybtnsum').textContent='€'+money();$('#payalert').classList.remove('on')};
function finishPay(){const to=st.flow==='member'?'welcome':'confirmed';if(st.busy){setTimeout(finishPay,60);return}if(cur!=='processing')return;if(to==='welcome'){st.member=true;st.out=false;syncMember()}else addBook(st.ev,'paid',st.seats);go(to,'fade');st.stack=[{n:'home',k:'root'},{n:to,k:'fade'}]}
function pay(btn){$('#payalert').classList.remove('on');load(btn,700,()=>{if(st.failPay){st.failPay=false;syncSw();$('#payalert').classList.add('on');fire('error');$('#s-pay .scroll').scrollTo({top:0,behavior:st.rm?'auto':'smooth'});return}go('processing','fade');setTimeout(finishPay,3200)})}
let loadT=[];
const UP='cubic-bezier(.2,.7,.3,1)',DOWN='cubic-bezier(.6,0,.9,.4)';
prep.processing=()=>{const m=st.flow==='member',el=$('#loaderch');setCh(el,m?'star':'mug','joy');$('#loadt').textContent=m?'Opening your month':'Paying';loaderStop();const L=ms(2200);
 if(!st.rm){el._anim=el._b.animate([{transform:'translateY(0) rotate(0deg) scale(1,1)',easing:UP},{transform:'translateY(0) rotate(0deg) scale(1.1,.88)',offset:.07,easing:UP},{transform:'translateY(-34%) rotate(0deg) scale(.95,1.06)',offset:.22,easing:DOWN},{transform:'translateY(0) rotate(0deg) scale(1.1,.88)',offset:.37,easing:UP},{transform:'translateY(-50%) rotate(180deg) scale(1,1)',offset:.56,easing:DOWN},{transform:'translateY(0) rotate(360deg) scale(1.12,.86)',offset:.75,easing:UP},{transform:'translateY(0) rotate(360deg) scale(1,1)',offset:.86},{transform:'translateY(0) rotate(360deg) scale(1,1)'}],{duration:L,iterations:Infinity});
  el._sh=$('#lshadow').animate([{transform:'scale(1)',opacity:1},{transform:'scale(1.1)',opacity:1,offset:.07},{transform:'scale(.6)',opacity:.6,offset:.22},{transform:'scale(1.1)',opacity:1,offset:.37},{transform:'scale(.45)',opacity:.5,offset:.56},{transform:'scale(1.12)',opacity:1,offset:.75},{transform:'scale(1)',opacity:1,offset:.86},{transform:'scale(1)',opacity:1}],{duration:L,iterations:Infinity})}
 const F=[['joy',0],['pleased',.2],['joy',.37],['surprised',.52],['wink',.76],['hello',.9]];const tick=()=>F.forEach(([f,p])=>loadT.push(setTimeout(()=>showFrame(el,f,200),L*p)));tick();loadT.push(setInterval(tick,L));fire('loader')};
function loaderStop(){loadT.forEach(t=>{clearTimeout(t);clearInterval(t)});loadT=[];const el=$('#loaderch');if(el._anim){el._anim.cancel();el._anim=null}if(el._sh){el._sh.cancel();el._sh=null}}
leave.processing=loaderStop;
prep.confirmed=()=>{const e=ev(st.ev)||ev('1119');$('#confhl').textContent='See you '+WDL[e.w];$('#confmail').textContent=st.email||'mari@example.com';$('#confwhen').textContent=`${e.label}, ${e.time}`;$('#confseats').textContent=st.member?'1 seat, included in your membership':`${st.seats} ${st.seats>1?'seats':'seat'}, paid €${30*st.seats}`};
prep.welcome=()=>{$('#welname').textContent=st.name||'Mari Tamm'};

/* ---- waiting list ---- */
prep.wait=o=>{const e=ev(o.ev||st.waitEv||'1125');st.waitEv=e.id;$('#waitwhen').textContent=`${e.label}, ${e.time} with ${e.who}`;const f=$('#waitform');f.email.value=st.email;$$('.f',f).forEach(x=>x.classList.remove('bad'))};
prep.waitdone=()=>{$('#waitmail').textContent=st.email;const al=[ev('1122'),...EV].find(e=>e.left&&!isMine(e.id)&&e.id!==st.waitEv);st.altEv=al.id;$('#waitaltlbl').textContent='Book '+al.label;$('#waitalt').innerHTML=pickHTML(al,false).replace('data-act="pick"','data-act="wait-alt"');$$('#waitalt .seats').forEach(s=>s.classList.remove('go'))};

/* ---- picker ---- */
prep.picker=()=>{$('#tiles').innerHTML=CHARS.map(c=>`<button class="tile${c[0]===st.char?' sel':''}" role="radio" aria-checked="${c[0]===st.char}" data-act="tile" data-c="${c[0]}" data-chhost><span class="box">${chHTML(c[0],c[2])}</span>${c[1]}<span class="badge">${ic('check')}</span></button>`).join('');setCh($('#pickch'),st.char,chE(st.char));if(st.pname)$('#pickname').value=st.pname;$('#covers').innerHTML=COVERS.map(c=>`<button type="button" class="cv patt c-${c[0]}${c[0]===st.cover?' sel':''}" role="radio" aria-checked="${c[0]===st.cover}" aria-label="${c[1]}" data-act="cover" data-c="${c[0]}"><span class="badge">${ic('check')}</span></button>`).join('')};
const COVERS=[['lilac','Lilac'],['blue','Blue'],['sand','Sand'],['cocoa','Cocoa']];
prep.login=()=>{const f=$('#loginform');f.email.value=st.email||'';f.pass.value='';$$('.f',f).forEach(x=>x.classList.remove('bad'))};

/* ---- community ---- */
function homeCommunity(){const hm=$('#homemems');hm.innerHTML=memsHTML();const hw=$('#homeworks');if(!hw.firstChild){hw.innerHTML=['mug','bowl','teapot','cup'].map((id,i)=>wcardHTML(work(id),i,'data-reveal')).join('')}hydrate($('#madehome'))}
const FILTERS=[['all','All'],['mug','Mugs and cups'],['bowl','Bowls'],['shelf','On the shelf']];
const filtered=()=>WORKS.filter(w=>st.filter==='all'||(st.filter==='shelf'?w.shelf:w.kind===st.filter));
prep.made=o=>{if(!o.isBack)st.filter='all';$('#madebody').innerHTML=`<button class="link crumb" data-act="back">${ics('back')}Back</button>
 <div class="lockup blk" data-in style="--i:0"><div class="lk-t"><h1 class="h1">Made here</h1><p class="lead">Everything on this page was made at the table. Members decide what they show.</p></div>${chHTML('glaze','wink','pop','style="--i:3"')}</div>
 <div data-in style="--i:1"><p class="small b" style="margin-bottom:10px">17 at the table</p><div class="mems">${memsHTML()}</div></div>
 <div class="fchips" data-in style="--i:2" role="radiogroup" aria-label="Show">${FILTERS.map(f=>`<button class="fchip${f[0]===st.filter?' on':''}" role="radio" aria-checked="${f[0]===st.filter}" data-act="filter" data-f="${f[0]}">${f[1]}</button>`).join('')}</div>
 <div class="cols" id="madegrid">${filtered().map((w,i)=>wcardHTML(w,i+3)).join('')}</div>
 <div class="band s-blue" data-in style="--i:6"><div><b style="font-size:18px">Make yours</b><br><span class="small">Two hours at the table. Clay, firing and tea included.</span></div><button class="btn buy" data-act="book"><span>Book an evening</span><i class="div" data-guest></i><span data-guest>€30</span></button></div>
 <p class="small mute" data-in style="--i:7">Photos of the pieces are placeholders from Flickr, CC BY 2.0: seabee314, Tobyotter, lindsay.dee.bunny, moria, orcmid, bptakoma, anathea.</p>`};
prep.work=o=>{if(o.id)st.work=o.id;const w=work(st.work),m=mem(w.by),r=REACT[w.id]||(REACT[w.id]=[0,0,0]),more=WORKS.filter(x=>x.by===w.by&&x.id!==w.id).slice(0,3);
 $('#workbody').innerHTML=`<button class="link crumb" data-act="back">${ics('back')}Back</button>
 <aside class="side"><div class="wphoto" data-in style="--i:0;aspect-ratio:${Math.max(.85,Math.min(1.2,w.r))}"><img data-img="${w.img}" alt="${w.t}"></div></aside>
 <div class="main">
  <h1 class="h1 s" data-in style="--i:1">${w.t}</h1>
  <p class="lead" data-in style="--i:2">${w.d}</p>
  <button class="maker" data-in style="--i:3" data-act="member-profile" data-id="${m.id}" data-chhost><span class="av ${m.sf}">${chHTML(m.c,m.e)}</span><span style="flex:1"><b>${m.n}</b><span class="small mute">${m.me?'See your shelf':'See '+m.f+'’s shelf'}</span></span><span class="ic chev">${ic('fwd')}</span></button>
  <div data-in style="--i:4"><p class="small b" style="margin-bottom:10px">Leave a face</p><div class="faces">${FACES.map((f,i)=>`<button class="face${r[i]?' sel':''}" aria-pressed="${!!r[i]}" data-act="face" data-i="${i}" data-chhost>${chHTML(f[0],f[1])}<span class="roll"><b>${w.f[i]+r[i]}</b></span></button>`).join('')}</div></div>
  ${w.shelf?`<div class="shelfcard s-c50" data-in style="--i:5"><div><b style="font-size:16px">On the shelf, €${w.shelf}</b><br><span class="small mute">Sold by the maker, not by the studio.</span></div><button class="btn quiet" data-act="noop">${m.me?'Change the price':'Ask '+m.f+' about it'}</button></div>`:''}
  ${more.length?`<div class="sub-h" data-in style="--i:6"><h2 class="h2">${m.me?'More of yours':'More by '+m.f}</h2></div><div class="wgrid three">${more.map((x,i)=>wcardHTML(x,7+i)).join('')}</div>`:''}
 </div>`};
prep.profile=o=>{if(o.who)st.prof=o.who==='me'?'mari':o.who;const m=mem(st.prof),mine=!!m.me,ws=WORKS.filter(w=>w.by===m.id),faces=ws.reduce((a,w)=>a+w.f[0]+w.f[1]+w.f[2],0),others=WORKS.filter(w=>w.by!==m.id).slice(0,4),nb=mine&&nextBook(),rest=mine?st.books.map(b=>ev(b.id)).filter(e=>nb&&e.id!==nb.id).sort((a,b)=>a.dt-b.dt):[];
 const band=!mine?'':nb?`<div class="band s-blue patt nextev" data-in style="--i:3"><div><p class="small b">Your next evening</p><p class="bandh">${nb.e.label}, ${nb.e.time}</p><p class="small">With ${nb.e.who}, Ankru 8. ${nb.how==='member'?'Included in your membership':`${nb.seats} ${nb.seats>1?'seats':'seat'}, paid €${30*nb.seats}`}</p>${rest.length?`<p class="small" style="margin-top:6px">Also booked: ${rest.map(e=>e.label).join(', ')}</p>`:''}</div><div class="acts"><button class="btn quiet" data-act="book">Book another evening</button><button class="link" data-act="noop">Change or cancel</button></div></div>`
  :`<div class="band s-c50 nextev" data-in style="--i:3"><div><p class="small b">Your next evening</p><p class="bandh">Nothing booked yet</p><p class="small">Evenings are included in your membership. Nothing to pay when you book.</p></div><div class="acts"><button class="btn next" data-act="book">Book an evening</button></div></div>`;
 $('#profbody').innerHTML=`<button class="link crumb" data-act="back">${ics('back')}Back</button>
 <div class="pcover" data-in style="--i:0"><div class="cover patt c-${mine?st.cover:m.cv}">${mine?`<span class="mbadge">${TICK}<span><b>Active membership</b>17 Nov to 16 Dec</span></span>`:''}</div><div class="pavrow"><span class="pav ${m.sf}" data-chhost>${chHTML(m.c,m.e,'eq pop','style="--i:3"')}</span>${mine?`<div class="pacts"><button class="btn quiet sm" data-act="profile">Edit profile</button><button class="link" data-act="logout">Log out</button></div>`:''}</div></div>
 <div class="profhead"><div class="lk-t" data-in style="--i:1"><h1 class="h1">${m.n}</h1><p>Member since November 2026</p></div>
  <div class="stats" data-in style="--i:2"><div class="stat"><span class="num" data-n="${m.evs}">0</span><small>evenings at the table</small></div><div class="stat"><span class="num" data-n="${ws.length}">0</span><small>pieces on this page</small></div><div class="stat"><span class="num" data-n="${faces}">0</span><small>faces received</small></div></div></div>
 ${band}
 <div class="sub-h" data-in style="--i:4"><h2 class="h2">${mine?'Your shelf':'The shelf'}</h2><span class="h2">${('0'+ws.length).slice(-2)}</span></div>
 <div class="wgrid">${ws.map((w,i)=>wcardHTML(w,5+i)).join('')}</div>
 <p class="small mute" data-in style="--i:8">${mine?'You decide what is public. Only what you choose to show appears here.':m.f+' chose to show this page. Members decide what is public.'}</p>
 ${mine?`<div class="sub-h" data-in style="--i:9"><h2 class="h2">From the others</h2></div><div class="wgrid">${others.map((w,i)=>wcardHTML(w,10+i)).join('')}</div><button class="rowbtn rowlink" data-in style="--i:12" data-act="nav-made"><span class="small b">See the whole shelf</span><span class="ic chev">${ic('fwd')}</span></button>`:''}`};
after.profile=()=>{$$('#profbody .stat .num').forEach(n=>count(n,0,+n.dataset.n,600));fire('count')};

/* ---- small parts ---- */
function setSeg(seg,i,instant){const bs=$$('button',seg);seg.style.setProperty('--n',bs.length);const th=$('.thumb',seg);if(instant){th.style.transition='none'}seg.style.setProperty('--at',i);bs.forEach((b,j)=>b.classList.toggle('on',j===i));if(instant){th.offsetWidth;th.style.transition=''}else fire('tabs')}
function load(btn,t,cb){if(btn.classList.contains('is-loading'))return;btn.style.width=btn.offsetWidth+'px';const html=btn.innerHTML;btn.classList.add('is-loading');btn.setAttribute('aria-busy','true');btn.innerHTML='<i class="spin"></i><span>One moment</span>';fire('loading');setTimeout(()=>{btn.classList.remove('is-loading');btn.removeAttribute('aria-busy');btn.innerHTML=html;btn.style.width='';cb()},t)}
let tt;function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('on');fire('toast');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),4000)}
function menu(on){const m=$('#menu');if(on===m.classList.contains('on'))return;m.classList.toggle('on',on);m.setAttribute('aria-hidden',!on);if(on){fire('menu');hydrate(m);fit(m);setTimeout(()=>$('[data-act="menu-close"]',m).focus({preventScroll:true}),50)}}
function syncSw(){$$('[data-act="sw"]').forEach(b=>b.setAttribute('aria-checked',!!st[b.dataset.k]))}
function setRm(v){st.rm=v;app.classList.toggle('rm',v);syncSw();if(v)fire('reduced')}
function panel(on){const p=$('#panel');if(on===undefined)on=!p.classList.contains('on');p.classList.toggle('on',on);$('#scrim').classList.toggle('on',on)}
const sample=()=>{st.name=st.name||'Mari Tamm';st.email=st.email||'mari@example.com'};
const LANGMSG='Estonian and Russian arrive with the build, this prototype is in English';

/* ---- device ---- */
const DEV={phone:[390,820,600],tablet:[834,1112,720],desktop:[1360,860,600]};
function fitDevice(){if(SITE){const w=innerWidth;st.dev=w>=1100?'desktop':w>=700?'tablet':'phone';st.S=1;app.classList.add('native','site');$('#device').dataset.dev=st.dev;if(w>=1100)menu(false);return}const narrow=innerWidth<=860,compact=narrow||st.wide,native=narrow&&st.dev==='phone';app.classList.toggle('compact',compact);app.classList.toggle('native',native);if(!compact)panel(false);const d=$('#device'),box=$('#devbox'),w=$('#devwrap');d.dataset.dev=st.dev;
 if(native){st.S=1;d.style.width=d.style.height=d.style.transform='';box.style.width=box.style.height='';return}
 const [dw,dh,minH]=DEV[st.dev],bw=dw+20,pad=narrow?12:40,aw=w.clientWidth-pad,ah=w.clientHeight-pad;const S=Math.min(1,aw/bw,ah/(minH+20)),H=Math.max(minH+20,Math.min(dh+20,ah/S));st.S=S;d.style.width=bw+'px';d.style.height=H+'px';d.style.transform=`scale(${S})`;box.style.width=bw*S+'px';box.style.height=H*S+'px'}
function setDev(v){if(st.busy)return;st.dev=v;const i=['phone','tablet','desktop'].indexOf(v);setSeg($('#devseg'),i,true);$$('#pseg button').forEach((b,j)=>b.classList.toggle('on',j===i));fitDevice();if(isDesk())menu(false);requestAnimationFrame(()=>{fit(scr(cur));if($('#menu').classList.contains('on'))fit($('#menu'))})}

/* ---- jump ---- */
const JUMP=[['home','Home'],['menu','Menu'],['book','Pick an evening'],['month','Month'],['empty','Empty month'],['loading','Loading'],['fail','Did not load'],['details','Details'],['pay','Payment'],['processing','Paying'],['confirmed','Confirmed'],['memberbook','Member books'],['wait','Waiting list'],['waitdone','On the list'],['member','Membership'],['join','Become a member'],['welcome','Welcome'],['picker','Set up profile'],['myprofile','Your profile'],['login','Log in'],['made','Made here'],['work','A piece'],['profile','A member']];
$('#chips').innerHTML=JUMP.map(j=>`<button class="chip" data-act="jump" data-to="${j[0]}">${j[1]}</button>`).join('');
function jump(to){if(st.busy)return;menu(false);if(app.classList.contains('compact'))panel(false);sample();const base=[{n:'home',k:'root'}];const J=(n,k,o={})=>{if(cur===n)go(n,'fade',{...o,re:1});else go(n,'fade',o);st.stack=n==='home'?base:[...base,{n,k,o}]};
 switch(to){case'home':return home();case'menu':if(isDesk())return toast('The menu is for phone and tablet, a computer shows the links in the header');return menu(true);
 case'book':st.flow='evening';st.view='list';st.loaded=true;return J('book','sheet');
 case'month':st.flow='evening';st.view='month';st.month=0;st.loaded=true;return J('book','sheet');
 case'empty':st.flow='evening';st.view='month';st.month=2;st.loaded=true;return J('book','sheet');
 case'loading':st.flow='evening';st.view='list';st.loaded=false;return J('book','sheet');
 case'fail':st.flow='evening';st.view='list';st.failLoad=true;syncSw();return J('book','sheet');
 case'details':guest();st.flow='evening';st.ev=st.ev||'1119';return J('details','sheet');
 case'join':guest();st.flow='member';return J('details','sheet');
 case'pay':guest();st.flow='evening';st.ev=st.ev||'1119';return J('pay','sheet');
 case'processing':guest();st.flow='evening';st.ev=st.ev||'1119';J('processing','fade');return setTimeout(finishPay,3400);
 case'confirmed':st.ev=st.ev||'1119';return J('confirmed','fade');
 case'memberbook':asMember();st.flow='evening';st.view='list';st.loaded=true;st.ev=null;return J('book','sheet');
 case'login':guest();return J('login','sheet');
 case'wait':return J('wait','sheet',{ev:'1125'});
 case'waitdone':return J('waitdone','sheet');
 case'member':return J('member','fade');
 case'welcome':st.flow='member';asMember();return J('welcome','fade');
 case'picker':asMember();return J('picker','fade');
 case'myprofile':st.profiled=true;asMember();return J('profile','fade',{who:'me'});
 case'made':return J('made','fade');
 case'work':return J('work','fade',{id:'mug'});
 case'profile':return J('profile','fade',{who:'anna'})}}

/* ---- actions ---- */
const ACT={
 home:()=>{menu(false);home()},menu:()=>menu(true),'menu-close':()=>menu(false),back,close:closeFlow,panel:()=>panel(),
 'lang-toast':b=>{if(b.classList.contains('on'))return;toast(LANGMSG)},
 lang:b=>{setSeg($('#langseg'),$$('#langseg button').indexOf(b));if(b.textContent!=='EN')toast(LANGMSG)},
 'nav-book':()=>{menu(false);if(cur!=='book')openBooking()},'nav-member':()=>page('member'),'nav-made':()=>page('made'),'nav-profile':()=>page('profile',{who:'me',re:cur==='profile'}),
 'nav-find':()=>{menu(false);const s=()=>{const sc=$('#homescroll'),y=($('#find').getBoundingClientRect().top-sc.getBoundingClientRect().top)/st.S+sc.scrollTop-8;sc.scrollTo({top:y,behavior:st.rm?'auto':'smooth'})};if(cur==='home')s();else{home();setTimeout(s,ms(320))}},
 book:b=>openBooking(b.dataset.ev,b.dataset.view),member:()=>push('member','forward'),
 join:()=>{st.flow='member';push('details','sheet')},
 wait:b=>{if(cur==='book'){push('wait','forward',{ev:b.dataset.ev})}else push('wait','sheet',{ev:b.dataset.ev})},
 acc:b=>{const a=b.closest('.acc'),on=a.classList.toggle('open');b.setAttribute('aria-expanded',on);fire('accordion')},
 view:b=>{const v=b.dataset.view;if(v===st.view)return;st.view=v;setSeg($('#viewseg'),v==='list'?0:1);if(v==='month'&&st.ev){const e=ev(st.ev);st.month=MONTHS.findIndex(m=>m[1]===e.m-1)}swap($('#bookbody'),()=>renderBook(true))},
 pick:b=>pick(b.dataset.ev),cal:b=>{const d=+b.dataset.d,n=st.month+d;if(n<0||n>=MONTHS.length)return;st.month=n;renderMonth(d)},
 retry:()=>{const body=$('#bookbody');swap(body,()=>{body.innerHTML='<div class="skel"><i></i><i></i><i></i></div>';fire('skeleton');loadList()})},
 notify:b=>{const f=$('#notify');if(!check(f,['email']))return;load(b,700,()=>{toast('Saved, we will write when January opens');const k=$('#kiln');if(k)act(k);f.email.value=''})},
 'book-next':b=>{if(!st.ev||isMine(st.ev))return;if(st.member)memberBook(b,st.ev);else push('details','forward')},
 seat:b=>seat(+b.dataset.d),
 fill:()=>{const f=$('#detform');f.name.value='Mari Tamm';f.email.value='mari@example.com';if(st.flow==='member')f.pass.value='sample-pass';$$('.f',f).forEach(x=>x.classList.remove('bad'))},
 'details-next':()=>{const f=$('#detform');if(!check(f,st.flow==='member'?['name','email','pass']:['name','email']))return;st.name=f.name.value.trim();st.email=f.email.value.trim();push('pay','forward')},
 paytab:b=>{const i=$$('#payseg button').indexOf(b);setSeg($('#payseg'),i);const box=$('#paypanes');swap(box,()=>{$$('.pane',box).forEach(p=>p.hidden=p.dataset.pane!==b.dataset.tab)})},
 bank:b=>{$$('.bank').forEach(x=>x.classList.toggle('sel',x===b));fire('select')},
 pay:b=>pay(b),
 login:()=>{menu(false);if(cur!=='login')push('login','sheet')},
 'login-fill':()=>{const f=$('#loginform');f.email.value=st.email||'mari@example.com';f.pass.value='sample-pass';$$('.f',f).forEach(x=>{x.classList.remove('bad');$('input',x).removeAttribute('aria-invalid')})},
 'login-go':b=>{const f=$('#loginform');if(!check(f,['email','pass']))return;load(b,700,()=>{st.email=f.email.value.trim();st.name=st.name||'Mari Tamm';f.pass.value='';st.profiled=true;asMember();if(go('profile','fade',{who:'me'}))st.stack=[{n:'home',k:'root'},{n:'profile',k:'fade',o:{who:'me'}}];setTimeout(()=>toast('Welcome back'),ms(380))})},
 logout:()=>{menu(false);if(st.busy)return;guest();const done=()=>toast('You are logged out');if(cur==='home'){home();done()}else{if(go('home','fade'))st.stack.length=1;setTimeout(done,ms(320))}},
 cover:b=>{st.cover=b.dataset.c;fire('select');$$('#covers .cv').forEach(x=>{const on=x===b;x.classList.toggle('sel',on);x.setAttribute('aria-checked',on)})},
 addcal:()=>toast('Added to your calendar'),noop:()=>toast('This link works on the real site, not in the prototype'),
 'wait-go':b=>{const f=$('#waitform');if(!check(f,['email']))return;st.email=f.email.value.trim();load(b,700,()=>push('waitdone','forward'))},
 'wait-alt':()=>{const id=st.altEv||'1122';if(st.member)return memberBook($('#s-waitdone .emptycard .btn'),id);st.flow='evening';st.ev=id;st.seats=1;push('details','forward')},
 profile:()=>{if(st.profiled&&cur!=='profile')push('profile','forward',{who:'me'});else push('picker','forward')},
 tile:b=>{st.char=b.dataset.c;fire('select');$$('#tiles .tile').forEach(t=>{const on=t===b;t.classList.toggle('sel',on);t.setAttribute('aria-checked',on)});setCh($('#pickch'),st.char,chE(st.char),true)},
 'save-profile':b=>load(b,600,()=>{st.pname=$('#pickname').value.trim()||st.name||'Mari T';st.profiled=true;st.member=true;syncMember();const under=st.stack[st.stack.length-2];if(under&&under.n==='profile')back();else if(go('profile','forward',{who:'me'})){st.stack=st.stack.filter(x=>x.n!=='picker');st.stack.push({n:'profile',k:'forward',o:{who:'me'}})}setTimeout(()=>toast('Profile saved'),ms(380))}),
 work:b=>{const img=$('.ph img',b);push('work',cur==='work'?'fade':'shared',{id:b.dataset.id,shared:cur==='work'?null:img})},
 'member-profile':b=>push('profile','forward',{who:b.dataset.id}),
 filter:b=>{if(b.dataset.f===st.filter)return;st.filter=b.dataset.f;$$('.fchip').forEach(x=>{const on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-checked',on)});fire('filter');const g=$('#madegrid');swap(g,()=>{g.innerHTML=filtered().map((w,i)=>wcardHTML(w,i)).join('');hydrate(g);$$('.wcard',g).forEach((c,i)=>c.style.setProperty('--i',i*.8));requestAnimationFrame(()=>requestAnimationFrame(()=>shown(g)))})},
 face:b=>{const w=work(st.work),i=+b.dataset.i,r=REACT[w.id],on=r[i]=r[i]?0:1;b.classList.toggle('sel',!!on);b.setAttribute('aria-pressed',!!on);roll($('.roll',b),w.f[i]+on,on?1:-1);fire('number');const c=$('.ch',b);c._busy=false;act(c)},
 speed:b=>{st.speed=+b.dataset.s;app.style.setProperty('--k',st.speed);const i=$$('#speedseg button').indexOf(b);setSeg($('#speedseg'),i)},
 sw:b=>{const k=b.dataset.k;if(k==='rm')setRm(!st.rm);else if(k==='member'){if(st.busy)return;st.member?guest():(sample(),st.profiled=true,asMember());if(app.classList.contains('compact'))panel(false);if(cur!=='home'&&go('home','fade'))st.stack.length=1;setTimeout(()=>toast(st.member?'You are logged in as a member':'You are a guest again'),ms(320))}else{st[k]=!st[k];syncSw();if(k==='wide'){panel(false);fitDevice();requestAnimationFrame(()=>fit(scr(cur)))}}},
 device:b=>setDev(b.dataset.d),
 jump:b=>jump(b.dataset.to)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(!b){const c=e.target.closest('.ch');if(c)act(c);return}if(b.disabled||b.classList.contains('is-loading'))return;const f=ACT[b.dataset.act];if(f)f(b)});
document.addEventListener('submit',e=>e.preventDefault());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#menu').classList.contains('on'))menu(false);else if($('#panel').classList.contains('on'))panel(false)}if(e.key==='Enter'&&e.target.tagName==='INPUT'){e.preventDefault();const s=e.target.closest('.screen'),b=s&&$('.footbar .btn',s);if(b)b.click()}});
document.addEventListener('mouseover',e=>{const t=e.target;if(!t.closest)return;const rt=e.relatedTarget;let c=t.closest('.ch');if(c){if(!(rt&&c.contains(rt)))act(c)}else{const h=t.closest('[data-chhost]');if(h&&!(rt&&h.contains(rt)))act($('.ch',h))}if(t.closest('.device .btn,.device .icon,.device .rowbtn,.device .pick,.device .tile,.device .link,.device .day.has,.device .acc-h,.device .nav button,.device .wcard,.device .mem,.device .face,.device .fchip,.device .maker'))fire('hover')});
document.addEventListener('pointerdown',e=>{if(e.target.closest&&e.target.closest('.device .btn,.device .icon,.device .pick,.device .tile,.device .day.has,.device .nextcard,.device .rowbtn,.device .wcard,.device .face'))fire('press')});
document.addEventListener('focusin',e=>{try{if(e.target.matches(':focus-visible')&&e.target.closest('.device'))fire('focus')}catch(_){}});
document.addEventListener('scroll',e=>{const t=e.target;if(!t.classList||!t.classList.contains('scroll'))return;const b=t.previousElementSibling;if(!b||!b.classList.contains('bar'))return;const was=b.classList.contains('scrolled'),on=was?t.scrollTop>6:t.scrollTop>40;if(on!==was){b.classList.toggle('scrolled',on);if(isDesk())fire('header')}},true);

/* ---- home ---- */
bars();
homeList(true);
homeCommunity();hydrate();syncSw();if(st.rm)app.classList.add('rm');
const hs=$('#homescroll');
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const t=x.target;t.classList.add('in');if(t.matches('.belong'))$('.checks',t).classList.add('in');fire('reveal');io.unobserve(t)}}),{root:hs,rootMargin:'0px 0px -6% 0px'});
$$('[data-reveal]',hs).forEach(e=>io.observe(e));
let stickyOn=false;new IntersectionObserver(es=>{const on=!es[0].isIntersecting&&es[0].boundingClientRect.top<200;if(on!==stickyOn){stickyOn=on;$('#sticky').classList.toggle('show',on);const hb=$('#s-home .hbook');hb.classList.toggle('buy',on);hb.classList.toggle('quiet',!on);fire('sticky')}},{root:hs}).observe($('#nextcard'));
let raf=0;hs.addEventListener('scroll',()=>{if(raf||st.rm)return;raf=requestAnimationFrame(()=>{raf=0;const y=hs.scrollTop;if(y<520){$('#heroimg').style.setProperty('--py',(-y*.12).toFixed(1)+'px');if(y>8)fire('parallax')}})},{passive:true});
if(SITE){try{history.replaceState({pb:0},'');history.pushState({pb:1},'');addEventListener('popstate',()=>{const arm=()=>history.pushState({pb:1},'');if($('#menu').classList.contains('on')){menu(false);return arm()}if(st.busy||cur==='processing')return arm();if(st.stack.length>1){back();return arm()}history.back()})}catch(_){}}
function boot(){fitDevice();fit();enter(scr('home'));fire('headline')}
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>requestAnimationFrame(boot));
addEventListener('resize',()=>{fitDevice();fit(scr(cur))});
fitDevice();
