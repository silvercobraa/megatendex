(this.webpackJsonpmegatendex=this.webpackJsonpmegatendex||[]).push([[0],{337:function(e,a,t){e.exports=t(410)},342:function(e,a,t){},343:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},344:function(e,a,t){},410:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),s=(t(342),t(27)),i=t(28),m=t(30),o=t(29),u=(t(343),t(344),t(328)),p=t(20),h=t(433),g=t(91),E=t(103),d=t(326),v=t.n(d),f=t(217),k=t.n(f),y=t(327),b=t.n(y),j=t(422),O=t(423),x=t(287),w=t(445),S=t(435),A=t(437),L=t(436),N=t(442),I=t(280),P=t(444),C=t(325),D=t.n(C),M=t(72),_=t(50),R=t.n(_),F=t(446),B=t(289),T=t(290),W=t(293),G=t(294),H=t(291),q=t(314),z="https://silvercobraa.pythonanywhere.com/",J=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={race:{demons:[]}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.race;R.a.get(z+this.props.match.params.game+"/race/".concat(a)).then((function(a){var t=a.data;e.setState({race:t}),console.log(t)})),console.log("GAAAAME",this.props.match.params.game)}},{key:"badges",value:function(e){return r.a.createElement("div",null,e.ultimate.map((function(e){return r.a.createElement(q.a,{label:e,size:"small",variant:"outlined",color:"secondary"})})))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-sm-12",align:"center"},r.a.createElement(P.a,{href:"/megatendex/#/"+this.props.match.params.game+"/race/"+this.props.match.params.race},r.a.createElement("h4",null,this.props.match.params.race)),r.a.createElement("img",{className:"img-thumbnail",align:"center",src:z+"/static/"+this.props.match.params.game+"/race/"+this.props.match.params.race+".webp",alt:this.props.match.params.race}),r.a.createElement("p",null,this.state.race.description),r.a.createElement(M.a,{variant:"h5",align:"center"},"Demons belonging to this race"),r.a.createElement(F.a,null,r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,null,"Level"),r.a.createElement(H.a,null,"Name"))),r.a.createElement(T.a,null,this.state.race.demons.map((function(a){return r.a.createElement(G.a,{key:a.name},r.a.createElement(H.a,null,a.level),r.a.createElement(H.a,null,r.a.createElement(P.a,{href:"/megatendex/#/"+e.props.match.params.game+"/demon/"+a.name},a.name)," ",e.badges(a)))}))))))}}]),t}(r.a.Component),U=t(438),$=t(443),K=t(439),Q=t(441),V=t(440),X=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={race:{}},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.a.get(z+this.props.match.params.game+"/race").then((function(a){var t=a.data;e.setState({race:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement($.a,{container:!0,justify:"center",spacing:3},Object.values(this.state.race).sort((function(e,a){return e.id<a.id?-1:e.id>a.id?1:0})).map((function(a){return r.a.createElement($.a,{item:!0,md:"2",alignItems:"center"},r.a.createElement(U.a,null,r.a.createElement(K.a,null,r.a.createElement(Q.a,{component:"img",image:z+"/static/"+e.props.match.params.game+"/race/"+a.name+".webp"}),r.a.createElement(V.a,null,r.a.createElement(M.a,{variant:"h6",align:"center"},r.a.createElement(P.a,{href:"/megatendex/#/"+e.props.match.params.game+"/race/"+a.name},a.name))))))})))}}]),t}(r.a.Component),Y=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={skill:{persona:[]}},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.skill;R.a.get(z+"skill/".concat(a)).then((function(a){var t=a.data;e.setState({skill:t})}))}},{key:"render",value:function(){return r.a.createElement($.a,{container:!0,spacing:3},r.a.createElement($.a,{item:!0,sm:"12"},r.a.createElement(M.a,{variant:"h5",align:"center"},this.state.skill.name)),r.a.createElement($.a,{item:!0,sm:"12"},r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Level"),r.a.createElement(H.a,null,"Persona"))),r.a.createElement(T.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Type"),r.a.createElement(H.a,null,this.state.skill.element)),r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Effect"),r.a.createElement(H.a,null,this.state.skill.effect)),r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Cost"),r.a.createElement(H.a,null,this.state.skill.cost?this.state.skill.cost>=1e3?this.state.skill.cost-1e3+" SP":this.state.skill.cost+"% HP":"N/A")),r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Power"),r.a.createElement(H.a,null,this.state.skill.power?this.state.skill.power:"N/A")),r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Hit rate"),r.a.createElement(H.a,null,this.state.skill.hit?this.state.skill.hit+"%":"N/A")),r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Price"),r.a.createElement(H.a,null,this.state.skill.price?this.state.skill.price:"N/A")),r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Skill card rank"),r.a.createElement(H.a,null,this.state.skill.rank?this.state.skill.rank:"N/A"))))),r.a.createElement($.a,{item:!0,sm:"12"},r.a.createElement(M.a,{variant:"h5",align:"center"},"Personas that can learn this skill")),r.a.createElement($.a,{item:!0,sm:"12"},r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},"Level"),r.a.createElement(H.a,null,"Persona"))),r.a.createElement(T.a,null,this.state.skill.persona.map((function(e){return r.a.createElement(G.a,null,r.a.createElement(H.a,{align:"right"},0===e.level?"-":e.level),r.a.createElement(H.a,{align:"left"},r.a.createElement(P.a,{href:"/megatendex/#/p4g/persona/"+e.persona},e.persona)))}))))))}}]),t}(r.a.Component),Z=t(167),ee=t.n(Z),ae=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={options:{filter:!0,filterType:"dropdown",pagination:!1,print:!1,selectableRows:"none"},columns:[{name:"Name",options:{filter:!1,customBodyRenderLite:function(a){var t=e.state.data[a];return r.a.createElement(P.a,{href:"/megatendex/#/p4g/skill/"+t[0]},t[0])}}},"Type","Card Rank",{name:"Effect",options:{filter:!1}}],data:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.a.get(z+"skill").then((function(a){var t=Object.values(a.data).map((function(e){return[e.name,e.element,e.rank,e.effect]}));e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{title:"Skills",data:this.state.data,columns:this.state.columns,options:this.state.options}))}}]),t}(r.a.Component),te=t(83),ne=t(324),re=t.n(ne),le={icons:{p3p:["lemon.svg","lemon.svg","lemon.svg","fire.svg","snowflake.svg","bolt.svg","wind.svg","sun.svg","moon.svg"],p4g:["fist-raised.svg","fire.svg","snowflake.svg","bolt.svg","wind.svg","sun.svg","moon.svg"],p5r:["fist-raised.svg","lemon.svg","fire.svg","snowflake.svg","bolt.svg","wind.svg","sun.svg","radiation.svg","lemon.svg","skull.svg"],smt4:["fist-raised.svg","lemon.svg","fire.svg","snowflake.svg","bolt.svg","wind.svg","sun.svg","moon.svg"]},elements:{p3p:["Slash","Strike","Pierce","Fire","Ice","Electric","Wind","Light","Dark"],p4g:["Physical","Fire","Ice","Electric","Wind","Light","Dark"],p5r:["Physical","Gun","Fire","Ice","Electric","Wind","Psychokinesis","Nuclear","Bless","Curse"],smt4:["Physical","Gun","Fire","Ice","Electric","Force","Light","Dark"]},stats:{p3p:["Strength","Magic","Endurance","Agility","Luck"],p4g:["Strength","Magic","Endurance","Agility","Luck"],p5r:["Strength","Magic","Endurance","Agility","Luck"],smt4:["HP","SP","Strength","Dexterity","Magic","Agility","Luck"]},max_stat:{p3p:80,p4g:80,p5r:80,smt4:500}},ce=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"super",value:function(e){this.props=e}},{key:"render",value:function(){var e=this;return console.log(this.props.special_fusion),this.props.special_fusion?r.a.createElement($.a,{item:!0,sm:4},r.a.createElement(te.a,null,r.a.createElement($.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement($.a,{item:!0},r.a.createElement(M.a,{variant:"h5",align:"center"},"Special fusion materials")),r.a.createElement($.a,{item:!0},r.a.createElement(F.a,null,r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,null,"Name"))),r.a.createElement(T.a,null,this.props.special_fusion.map((function(a){return r.a.createElement(G.a,null,r.a.createElement(H.a,null,r.a.createElement(P.a,{href:"/megatendex/#/"+e.props.game+"/demon/"+a},a)))}))))))))):r.a.createElement("p",null,"No es fusion especial")}}]),t}(r.a.Component),se=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={demon:{stats:[],skills:[],resistance:""},resi:{},skill:{},innate:[],resistance_color:{d:"table-primary",r:"table-info",n:"table-secondary",s:"table-success","-":"",w:"table-danger"},resistance_name:{d:"drain",r:"repel",n:"null",s:"resists","-":"normal",w:"weak"},options:{plotOptions:{bar:{horizontal:!1,dataLabels:{position:"top"}}},chart:{height:450,type:"bar"},title:{text:"Stats"},xaxis:{categories:le.stats[e.props.match.params.game]},yaxis:{max:le.max_stat[e.props.match.params.game]}}},e}return Object(i.a)(t,[{key:"is_ultimate",value:function(){if(this.state.demon.ultimate)return r.a.createElement("img",{width:"20px",height:"20px",src:"/megatendex/img/icons/star.svg",alt:"no icono"})}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.name;R.a.get(z+this.props.match.params.game+"/demon/".concat(a)).then((function(a){var t=a.data;console.log(t),e.setState({demon:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement($.a,{container:!0,spacing:3,alignItems:"center",justify:"center"},r.a.createElement($.a,{item:!0,sm:4},r.a.createElement(te.a,null,r.a.createElement($.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement($.a,{item:!0},r.a.createElement(M.a,{variant:"h5",align:"center"},"Race: ",r.a.createElement(P.a,{href:"/megatendex/#/"+this.props.match.params.game+"/race/"+this.state.demon.race},this.state.demon.race))),r.a.createElement($.a,{item:!0},r.a.createElement("img",{className:"img-thumbnail",src:z+"/static/"+this.props.match.params.game+"/race/"+this.state.demon.race+".webp",alt:this.state.demon.race}))))),r.a.createElement($.a,{item:!0,sm:4},r.a.createElement(te.a,null,r.a.createElement($.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement($.a,{item:!0},r.a.createElement(M.a,{variant:"h5",align:"center"},r.a.createElement("b",null,this.state.demon.name)," (",r.a.createElement("i",null,this.state.demon.japanese_name),")",this.is_ultimate())),r.a.createElement($.a,{item:!0},r.a.createElement("img",{className:"img-thumbnail",align:"center",src:z+"/static/"+this.props.match.params.game+"/demon/"+this.state.demon.name+".png",alt:this.state.demon.name}))))),r.a.createElement($.a,{item:!0,sm:4},r.a.createElement(te.a,null,r.a.createElement($.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement($.a,{item:!0},r.a.createElement(M.a,{variant:"h5",align:"center"},"Level: ",this.state.demon.level)),r.a.createElement($.a,{item:!0},r.a.createElement("q",{className:"text-center"},this.state.demon.description))))),r.a.createElement($.a,{item:!0,sm:4,xs:12},r.a.createElement(te.a,null,r.a.createElement($.a,{container:!0,direction:"column",alignItems:"stretch"},r.a.createElement($.a,{item:!0},r.a.createElement(M.a,{variant:"h5",align:"center"},"Statistics")),r.a.createElement($.a,{item:!0},r.a.createElement(re.a,{options:this.state.options,series:[{data:this.state.demon.stats}],type:this.state.options.chart.type,height:350}))))),r.a.createElement($.a,{item:!0,sm:4},r.a.createElement(te.a,null,r.a.createElement($.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement($.a,{item:!0},r.a.createElement(M.a,{variant:"h5",align:"center"},"Resistances")),r.a.createElement($.a,{item:!0},r.a.createElement(F.a,null,r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,null,"Type"),r.a.createElement(H.a,null,"Resistance"))),r.a.createElement(T.a,null,le.elements[this.props.match.params.game].map((function(a,t){return r.a.createElement(G.a,null,r.a.createElement(H.a,null,r.a.createElement("img",{width:"20px",height:"20px",src:"/megatendex/img/icons/"+le.icons[e.props.match.params.game][t],alt:"no icono"})," ",a),r.a.createElement(H.a,{className:e.state.resistance_color[e.state.demon.resistance[t]]},e.state.resistance_name[e.state.demon.resistance[t]]))}))))))))),r.a.createElement($.a,{item:!0,sm:4},r.a.createElement(te.a,null,r.a.createElement($.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement($.a,{item:!0},r.a.createElement(M.a,{variant:"h5",align:"center"},"Skills")),r.a.createElement($.a,null,r.a.createElement(F.a,null,r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,null,"Level"),r.a.createElement(H.a,null,"Skill"))),r.a.createElement(T.a,null,this.state.demon.skills.map((function(a){return r.a.createElement(G.a,null,r.a.createElement(H.a,null,a.level?a.level:"-"),r.a.createElement(H.a,null,r.a.createElement(P.a,{href:"/megatendex/#/"+e.props.match.params.game+"/skill/"+a.name},a.name)))}))))))))),r.a.createElement(ce,{special_fusion:this.state.demon.special_fusion,game:this.props.match.params.game}))}}]),t}(r.a.Component),ie=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={demons:{},options:{filter:!0,filterType:"dropdown",print:!1,selectableRows:"none",filterList:["Arcana","Required Level"]},columns:[{name:"Name",options:{filter:!1,customBodyRenderLite:function(a){var t=e.state.data[a];return r.a.createElement(P.a,{href:"/megatendex/#/"+e.props.match.params.game+"/demon/"+t[0]},t[0])}}},{name:"Arcana",options:{customBodyRenderLite:function(a){var t=e.state.data[a];return r.a.createElement(P.a,{href:"/megatendex/#/"+e.props.match.params.game+"/race/"+t[1]},t[1])}}},"Required Level"],data:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.a.get(z+this.props.match.params.game+"/demon").then((function(a){var t=Object.values(a.data).map((function(e){return[e.name,e.race,e.level]}));e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement(ee.a,{title:"Demons",data:this.state.data,columns:this.state.columns,options:this.state.options})}}]),t}(r.a.Component),me=Object(g.a)(),oe=E.presets.createStandardLayout(),ue=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{className:"img-thumbnail",align:"center",src:"/img/yanderedev-mother-harlot.jpg",alt:"UFF"})}}]),t}(r.a.Component),pe=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={games:[{key:"p4g",name:"Persona 4 Golden"}]},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.games.map((function(e){return r.a.createElement(S.a,null,r.a.createElement(A.a,{expandIcon:r.a.createElement(D.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(M.a,null,e.name)),r.a.createElement(L.a,null,r.a.createElement(j.a,{component:"nav"},[{category:"Races",url:"/megatendex/#/"+e.key+"/race",icon:"/img/icons/star-of-david.svg"},{category:"Demons",url:"/megatendex/#/"+e.key+"/demon",icon:"/img/icons/freebsd.svg"},{category:"Skills",url:"/megatendex/#/"+e.key+"/skill",icon:"/img/icons/lemon.svg"}].map((function(e){return r.a.createElement(O.a,{key:e.category,button:!0,component:"a",href:e.url},r.a.createElement(w.a,null,r.a.createElement("img",{className:"img-icon",src:e.icon,width:"20px",height:"20px"})),r.a.createElement(x.a,{primary:e.category}))})))))})))}}]),t}(r.a.Component),he=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:me},r.a.createElement(E.Root,{config:oe},r.a.createElement(E.Header,{renderMenuIcon:function(e){return e?r.a.createElement(k.a,null):r.a.createElement(v.a,null)}},r.a.createElement(I.a,null,r.a.createElement(P.a,{href:"/megatendex"},r.a.createElement(M.a,{variant:"h6",align:"center"},"MegatenDex")))),r.a.createElement(E.Nav,{renderIcon:function(e){return e?r.a.createElement(b.a,null):r.a.createElement(k.a,null)}},r.a.createElement(pe,null)),r.a.createElement(E.Content,null,r.a.createElement(N.a,null,r.a.createElement(u.a,{basename:"/megatendex"},r.a.createElement(p.a,{path:"/:game/demon/:name",component:se}),r.a.createElement(p.a,{path:"/:game/race/:race",component:J}),r.a.createElement(p.a,{path:"/:game/skill/:skill",component:Y}),r.a.createElement(p.a,{exact:!0,path:"/:game/race",component:X}),r.a.createElement(p.a,{exact:!0,path:"/:game/demon",component:ie}),r.a.createElement(p.a,{exact:!0,path:"/:game/skill",component:ae}),r.a.createElement(p.a,{exact:!0,path:"/",component:ue}))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[337,1,2]]]);
//# sourceMappingURL=main.bbfea74d.chunk.js.map