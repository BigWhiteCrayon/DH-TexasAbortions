(this["webpackJsonpdh-texas_abortions"]=this["webpackJsonpdh-texas_abortions"]||[]).push([[0],{183:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(17),s=n.n(l),i=(n(73),n(36),n(11)),r=n(12),c=n(16),d=n(15),h=(n(74),n(18)),u=n(21),m=n.p+"static/media/texas_counties.bb62b53f.png",g=n(1),b=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={time:"PreHB2",overlay:!1,radius:!1,radiusDistance:160934.4},e.handleClickCurrent=function(){e.setState({time:"current"})},e.handleClick1973=function(){e.setState({time:"1973"})},e.handleClickPreHB2=function(){e.setState({time:"PreHB2"})},e.handleClickPostHB2=function(){e.setState({time:"PostHB2"})},e.handleClickOverlay=function(){e.setState({overlay:!e.state.overlay})},e.handleClickRadiusOff=function(){e.setState({radius:!1})},e.handleClickRadius100M=function(){e.setState({radius:!0,radiusDistance:160934.4})},e.handleClickRadius200M=function(){e.setState({radius:!0,radiusDistance:321868.8})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=[],n=m;return"current"===this.state.time?t=u.currentLocations:"1973"===this.state.time?t=u.Loc1973:"PreHB2"===this.state.time?t=u.PreHB2:"PostHB2"===this.state.time&&(t=u.PostHB2),Object(g.jsxs)("div",{className:"containerStyle",children:[Object(g.jsx)(h.d,{googleMapsApiKey:"AIzaSyDSHqWs3BBl6fFVXp5-D7vVW7SWgwts2gI",children:Object(g.jsxs)(h.b,{mapContainerStyle:C,center:f,zoom:5.5,children:[this.state.overlay?Object(g.jsx)(h.c,{bounds:j,url:n}):null,t.map((function(t,n){return Object(g.jsxs)("div",{children:[Object(g.jsx)(h.e,{position:{lat:t.lat,lng:t.long}},n),Object(g.jsx)(h.a,{center:{lat:t.lat,lng:t.long},radius:e.state.radiusDistance,visible:e.state.radius,options:{strokeWeight:0,fillColor:"mediumSlateBlue"}},n)]})}))]})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{className:"dateButton",onClick:this.handleClick1973,disabled:"1973"===this.state.time,children:"1973"}),Object(g.jsx)("button",{className:"dateButton",onClick:this.handleClickPreHB2,disabled:"PreHB2"===this.state.time,children:"Pre-HB2"}),Object(g.jsx)("button",{className:"dateButton",onClick:this.handleClickPostHB2,disabled:"PostHB2"===this.state.time,children:"Post-HB2"}),Object(g.jsx)("button",{className:"dateButton",onClick:this.handleClickCurrent,disabled:"current"===this.state.time,children:"Current"}),Object(g.jsx)("button",{className:"overlayButton",onClick:this.handleClickOverlay,children:"Toggle Overlay"}),Object(g.jsx)("button",{className:"radiusButton",onClick:this.handleClickRadiusOff,disabled:!1===this.state.radius,children:"Radius Off"}),Object(g.jsx)("button",{className:"radiusButton",onClick:this.handleClickRadius100M,disabled:!0===this.state.radius&&160934.4===this.state.radiusDistance,children:"100 Mile Radius"}),Object(g.jsx)("button",{className:"radiusButton",onClick:this.handleClickRadius200M,disabled:!0===this.state.radius&&321868.8===this.state.radiusDistance,children:"200 Mile Radius"})]})]})}}]),n}(o.a.Component),f={lat:32,lng:-99.5},C={display:"flex",alignSelf:"center",width:"100%",height:"650px",borderRadius:"5px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"},j={north:38.98,south:23.35,east:-92.85,west:-107.4},O=b,S=n(68),W=n.n(S),x=[n.p+"static/media/TEST.8e4156b5.md",n.p+"static/media/Test2.70df45f3.md"],H=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).text=[],e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.forEach((function(t){return fetch(t).then((function(e){return e.text()})).then((function(t){e.text.push(t),e.setState({ready:"y"})}))}))}},{key:"render",value:function(){return this.text.map((function(e,t){return Object(g.jsx)("div",{className:"Card",children:Object(g.jsx)(W.a,{components:{h1:p,p:v},children:e},t)})}))}}]),n}(o.a.Component),p=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("header",{className:"Subtitle",children:e.children[0]}),Object(g.jsx)("div",{className:"Divider"})]})},v=function(e){return Object(g.jsx)("text",{className:"bodyText",children:e.children[0]})},P=H,y=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(g.jsx)("iframe",{title:"form",src:"https://docs.google.com/forms/d/e/1FAIpQLSc19dDCeinx97Rl94eB06T85TXiLu4HSaE3EbVVsEfroicztQ/viewform?embedded=true",width:"100%",height:"700",justifySelf:"center",boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",frameBorder:"0",marginHeight:"0",marginWidth:"0",children:"Loading\u2026"})}}]),n}(o.a.Component);var N=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"Header",children:[Object(g.jsx)("header",{className:"Title",children:"How Hard has Getting an Abortion Been in Texas"}),Object(g.jsx)("header",{className:"SubtitleHeading",children:"and Why is that so Hard to Answer"})]}),Object(g.jsxs)("div",{className:"TopCard",children:[Object(g.jsx)("header",{className:"Subtitle",children:"The Change in Abortion Availabilty through the Years"}),Object(g.jsx)("div",{className:"Divider"}),Object(g.jsx)("text",{className:"bodyText",children:"We wanted to look at how the number of clinics available to women has fluctuated throughout the years in Texas. To do this we found snapshots though the years surrounding pivotal events in a woman\u2019s ability to seek out an abortion. This includes the first clinic in Dallas in 1973, the years surrounding the contentious enactment of HB2 and the subsequent repeal, and the reality of the current day.  In an effort to show how this effects women of different backgrounds, we included a toggleable overlay displaying the median household income per county and the ability to see a 100 mile and 200 mile radius around each  clinic to see the distances some women in Texas may have traveled for a federally ensured right."}),Object(g.jsx)(O,{})]}),Object(g.jsxs)("div",{className:"Card",children:[Object(g.jsx)("header",{className:"Subtitle",children:"The Steps They Took"}),Object(g.jsx)("div",{className:"Divider"}),Object(g.jsx)("text",{className:"bodyText",children:"Women seeking abortion in Texas face numerous obstacles in their efforts to safely terminate a pregnancy. The following quiz highlights some of the difficulties they have faced and puts you, the user in their shoes. If you were suffering from an unwanted pregnancy, would you be able to safely and successfully get an abortion?"}),Object(g.jsx)(y,{})]}),Object(g.jsx)(P,{})]})};s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root"))},21:function(e){e.exports=JSON.parse('{"Loc1973":[{"name":"Southwestern Women\'s","lat":32.88677263747155,"long":-96.75984034637284}],"PreHB2":[{"name":"AAA Concerned Women\'s Center","lat":29.70156294534744,"long":-95.51772978041669},{"name":"Aalto Women\'s Center","lat":29.714574754135093,"long":-95.49915260530334},{"name":"Abortion Advantage","lat":32.818119978486386,"long":-96.8499020015761},{"name":"Affordable Women\'s Health Center","lat":29.863324963580986,"long":-95.40556299149283},{"name":"Alamo Women\'s Reproductive Services (clinic)","lat":29.507441300982205,"long":-98.58491314209508},{"name":"All Women\'s Medical Clinic","lat":26.250954341622517,"long":-98.20222580533614},{"name":"Austin Women\'s Health Center","lat":30.239365554042028,"long":-97.73879908626365},{"name":"Coastal Birth Control Center","lat":27.778186755905974,"long":-97.41052537464044},{"name":"Harlingen Reproductives Services","lat":26.171075616652303,"long":-97.6813164705389},{"name":"Hill Top Women\'s Reproductive Health Services","lat":31.771375677842382,"long":-106.4938344592585},{"name":"Houston Women\'s Clinic","lat":29.730154713961024,"long":-95.38435254578603},{"name":"International Healthcare Solutions","lat":30.447180615639674,"long":-97.79568975927288},{"name":"Killeen Women\'s Health Center","lat":31.113498216054506,"long":-97.80085964392482},{"name":"KNS Medical","lat":29.72260530529458,"long":-95.46049277650881},{"name":"Midland Planned Parenthood Choice","lat":31.99612845625683,"long":-102.10242354391502},{"name":"New Women\'s Clinic","lat":29.437586210400966,"long":-98.49758247462434},{"name":"Northpark Medical Group","lat":32.886761227898,"long":-96.75972762856385},{"name":"Planned Parenthood A. Rapoport Women\'s Health Center","lat":31.517634242062766,"long":-97.20517030159078},{"name":"Planned Parenthood Abilene Perini Center for Choice","lat":32.461106451879125,"long":-99.76567462856882},{"name":"Planned Parenthood Babcock Road","lat":29.502812348038958,"long":-98.58239995928268},{"name":"Planned Parenthood Bandera Road Center","lat":29.49677763594028,"long":-98.61883472597479},{"name":"Planned Parenthood Center for Choice","lat":29.657130757094748,"long":-95.58257593586141},{"name":"Planned Parenthood Center for Choice Bryan","lat":30.64339543930991,"long":-96.33276900160035},{"name":"Planned Parenthood Fort Worth","lat":32.661236440735145,"long":-97.42132397344804},{"name":"Planned Parenthood Northeast Sexual Healthcare","lat":29.54486165341102,"long":-98.41013972983308},{"name":"Planned Parenthood South Austin Health Center","lat":30.22137277755227,"long":-97.76308324393433},{"name":"Planned Parenthood Women\'s Health Center","lat":33.57458382006855,"long":-101.89588589972065},{"name":"Reproductive Services","lat":31.779132415197434,"long":-106.47494553869988},{"name":"Routh Street Women\'s Clinic","lat":32.81829994286649,"long":-96.78869011691705},{"name":"San Angelo Planned Parenthood Center for Choice","lat":31.454518117952173,"long":-100.46364151323912},{"name":"Southwestern Women\'s Surgery Center","lat":32.89537878974336,"long":-96.7520624422614},{"name":"Suburban Women\'s Clinic NW","lat":29.733760640085194,"long":-95.42488591695079},{"name":"Suburban Women\'s Clinic SW","lat":30.019275716143387,"long":-95.44468904578306},{"name":"Texas Ambulatory Surgery Center","lat":30.278072171762073,"long":-97.74366077276893},{"name":"West Side Clinic","lat":32.7428398046451,"long":-97.46749493799294},{"name":"Whole Woman\'s Health of Austin","lat":30.412513154293496,"long":-97.72852524393228},{"name":"Whole Woman\'s Health of Beaumont","lat":30.072572450623408,"long":-94.12692494393585},{"name":"Whole Woman\'s Health of Fort Worth","lat":32.72533945018738,"long":-97.43514627089526},{"name":"Whole Woman\'s Health of McAllen","lat":26.196817746356295,"long":-98.23590917280816},{"name":"Whole Woman\'s Health of San Antonio","lat":29.381196823290903,"long":-98.41343221183465},{"name":"Women\'s Center of Houston","lat":29.712867092208068,"long":-95.52378730331006}],"PostHB2":[{"name":"Alamo Women\'s Reproductive Services (ASC)","lat":29.507441300982205,"long":-98.58491314209508},{"name":"Austin Women\'s Health Center","lat":30.239365554042028,"long":-97.73879908626365},{"name":"Hill Top Women\'s Reproductive Health Services","lat":31.771375677842382,"long":-106.4938344592585},{"name":"Houston Women\'s Clinic","lat":29.730154713961024,"long":-95.38435254578603},{"name":"Planned Parenthood Center for Choice","lat":29.725794020151632,"long":-95.33483300160991},{"name":"Planned Parenthood Dallas Health Services Center","lat":32.65764723583631,"long":-96.8816877989767},{"name":"Planned Parenthood Fort Worth","lat":32.661236440735145,"long":-97.42132397344804},{"name":"Planned Parenthood South Austin Health Center","lat":30.22137277755227,"long":-97.76308324393433},{"name":"Planned Parenthood South Texas Surgical Center","lat":29.503808012413188,"long":-98.58256805963974},{"name":"Reproductive Services","lat":31.779132415197434,"long":-106.47494553869988},{"name":"Southwestern Women\'s Surgery Center","lat":32.89537878974336,"long":-96.7520624422614},{"name":"Suburban Women\'s Clinic NW","lat":29.733760640085194,"long":-95.42488591695079},{"name":"Suburban Women\'s Clinic SW","lat":30.019275716143387,"long":-95.44468904578306},{"name":"Texas Ambulatory Surgery Center","lat":30.278072171762073,"long":-97.74366077276893},{"name":"Whole Woman\'s Health of Fort Worth","lat":32.72533945018738,"long":-97.43514627089526},{"name":"Whole Woman\'s Health of McAllen","lat":26.196817746356295,"long":-98.23590917280816},{"name":"Whole Woman\'s Health of San Antonio","lat":29.381196823290903,"long":-98.41343221183465},{"name":"Women\'s Center of Houston","lat":29.712867092208068,"long":-95.52378730331006}],"currentLocations":[{"name":"Southwestern Women\'s","lat":32.88677263747155,"long":-96.75984034637284},{"name":"PP El Paso","lat":31.770626500234933,"long":-106.476550586872},{"name":"PP Stafford","lat":29.639180783826408,"long":-95.58304905808744},{"name":"HOUSTON WOMENS CLINIC","lat":29.730060347944757,"long":-95.38429353110503},{"name":"HOUSTON WOMENS REPRODUCTIVE SERVICES","lat":29.776905376506917,"long":-95.41399024459403},{"name":"SUBURBAN WOMENS CLINIC","lat":29.733699293668252,"long":-95.42492711761477},{"name":"SUBURBAN WOMENS Medical Center","lat":30.019154950846925,"long":-95.52696130598198},{"name":"WOMEN\'S CENTER OF HOUSTON","lat":29.689275926871716,"long":-95.52696130598198},{"name":"WHOLE WOMANS HEALTH OF MCALLEN","lat":26.196826080514107,"long":-98.23579224281823},{"name":"PP Lubbock","lat":33.57464859787259,"long":-101.89608838868158},{"name":"PP Waco","lat":31.517466234503853,"long":-97.205168234984},{"name":"Planned Parenthood Dallas Health Services Center","lat":32.65764723583631,"long":-96.8816877989767},{"name":"WHOLE WOMANS HEALTH OF FORT WORTH","lat":32.72533027263901,"long":-97.43523083103058},{"name":"AUSTIN WOMENS HEALTH CENTER","lat":30.239598550116895,"long":-97.73884637527591},{"name":"WHOLE WOMANS HEALTH ALLIANCE","lat":30.411933176699485,"long":-97.72785904457878}]}')},36:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){}},[[183,1,2]]]);
//# sourceMappingURL=main.b2ee9814.chunk.js.map