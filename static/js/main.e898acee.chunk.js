(this["webpackJsonpface-recognition-app"]=this["webpackJsonpface-recognition-app"]||[]).push([[0],{397:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){},401:function(e,t,n){},402:function(e,t,n){},404:function(e,t,n){"use strict";n.r(t);var a=n(13),s=n.n(a),i=n(79),c=n.n(i),o=(n(86),n(26)),l=n(27),r=n(29),b=n(28),d=n(80),h=n.n(d),m=n(49),u=n.n(m),p=(n(397),n(2)),j=function(e){var t=e.box,n=e.imageUrl,a=t.map((function(e,t){return Object(p.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}},t)}));return Object(p.jsx)("div",{className:"center ma",children:Object(p.jsxs)("div",{className:"absolute mt4",children:[Object(p.jsx)("img",{id:"inputImage",alt:"",src:n,width:"500px",height:"auto"}),a]})})},g=(n(399),function(e){var t=e.onRouteChange;return e.isSignedIn?Object(p.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(p.jsx)("p",{className:"f2 pa1 black topnav-centered",style:{fontFamily:"SEGA LOGO FONT",fontWeight:"normal",FontSize:"42px",color:"whitesmoke"},children:"Face - Detection"}),Object(p.jsx)("p",{onClick:function(){return t("signout")},style:{fontWeight:"bold"},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})]}):Object(p.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(p.jsx)("p",{className:"f2 pa1 black topnav-centered",style:{fontFamily:"SEGA LOGO FONT",fontWeight:"normal",FontSize:"42px",display:"flex",justifyContent:"center",color:"whitesmoke"},children:"Face - Detection"}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(p.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})]})}),f=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){a.props.onRouteChange("home")},a.state={signInEmail:"",signInPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(p.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(p.jsx)("main",{className:"pa4 black-80",children:Object(p.jsxs)("div",{className:"measure",children:[Object(p.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(p.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(p.jsxs)("div",{className:"mt3",children:[Object(p.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(p.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(p.jsxs)("div",{className:"mv3",children:[Object(p.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(p.jsx)("div",{className:"lh-copy mt3",children:Object(p.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(s.a.Component),x=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){a.props.onRouteChange("home")},a.state={email:"",password:"",name:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(p.jsx)("main",{className:"pa4 black-80",children:Object(p.jsxs)("div",{className:"measure",children:[Object(p.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(p.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(p.jsxs)("div",{className:"mt3",children:[Object(p.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(p.jsxs)("div",{className:"mt3",children:[Object(p.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(p.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(p.jsxs)("div",{className:"mv3",children:[Object(p.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(s.a.Component),O=n(81),v=n.p+"static/media/Face.3306471b.png",w=(n(400),function(){return Object(p.jsx)("div",{className:"box ma4 mt0",children:Object(p.jsx)(O.a,{className:"Tilt",children:Object(p.jsxs)("div",{className:"Tilt-inner br2 shadow-2",style:{height:"200px",width:"200px",backgroundColor:"darkgreen"},children:[Object(p.jsx)("img",{src:v,alt:""})," "]})})})}),C=(n(401),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"f3",children:"Enter the link of the image to find the faces"}),Object(p.jsx)("div",{className:"center",children:Object(p.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(p.jsx)("input",{className:"f4 pa2 w-70 center inputFont",type:"text",onChange:t}),Object(p.jsx)("button",{className:"w-30 grow link ph3 dib white bg-purple",onClick:n,children:Object(p.jsx)("p",{children:"Detect"})})]})})]})}),N=(n(402),n(403),new u.a.App({apiKey:"af7a12a32d1740e4a2f8a3920d3c026c"})),y={fpsLimit:40,particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:.5,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0},S=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){for(var t,n=e.outputs[0].data.regions,a=document.getElementById("inputImage"),s=Number(a.width),i=Number(a.height),c=[],o=0;o<n.length;o+=1)t=n[o].region_info.bounding_box,c.push({leftCol:t.left_col*s,rightCol:s-t.right_col*s,topRow:t.top_row*i,bottomRow:i-t.bottom_row*i});return c},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value,imageUrl:t.target.value,box:[]})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),N.models.predict(u.a.FACE_DETECT_MODEL,e.state.input).then((function(t){console.log("hi",t),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:[],route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(h.a,{className:"particles",params:y}),Object(p.jsx)(g,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(p.jsxs)("div",{children:[Object(p.jsx)(w,{}),Object(p.jsx)(C,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(p.jsx)(j,{box:s,imageUrl:n}),this.state.imageUrl&&Object(p.jsxs)("div",{className:"ImageCount",style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"30%"},children:[Object(p.jsx)("h2",{style:{transition:"all 0.3s",margin:"2px",fontSize:"2rem"},children:"Face Count"}),Object(p.jsx)("h1",{style:{fontSize:"8rem",fontFamily:"sans-serif",fontWeight:"bold",margin:0},children:this.state.box.length})]})]}):"signin"===a?Object(p.jsx)(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(p.jsx)(x,{onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,405)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),k()},86:function(e,t,n){}},[[404,1,2]]]);
//# sourceMappingURL=main.e898acee.chunk.js.map