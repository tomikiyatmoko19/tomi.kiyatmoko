(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,s,a){},28:function(e,s,a){"use strict";a.r(s);var t=a(1),c=a(8),r=a.n(c),n=(a(19),a(3)),i=a(4),l=a(6),j=a(5),o=a(12),d=a.n(o),h=a(0),m=function(e){Object(l.a)(a,e);var s=Object(j.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.occupation,a=this.props.data.description,t=this.props.data.address.city,c=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(h.jsxs)("h3",{children:["I'm from ",t," based ",Object(h.jsx)("span",{children:s}),". ",a,"."]}),Object(h.jsx)("hr",{}),Object(h.jsx)("ul",{className:"social",children:c})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})}}]),a}(t.Component),b=function(e){Object(l.a)(a,e);var s=Object(j.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("ul",{className:"social-links",children:e}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"My journey is still far in the world of learning"})}),Object(h.jsx)("ul",{className:"copyright",children:Object(h.jsx)("li",{children:"Hak cipta"})})]}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(t.Component),u=function(e){Object(l.a)(a,e);var s=Object(j.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,a=this.props.data.bio,t=this.props.data.address.street,c=this.props.data.address.city,r=this.props.data.address.state,n=this.props.data.address.zip,i=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(h.jsxs)("section",{id:"about",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:s,alt:""})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns",children:[Object(h.jsx)("h2",{children:"About Meh"}),Object(h.jsx)("p",{children:a})]}),Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Details Contact"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[t," ",Object(h.jsx)("br",{}),c," ",r," , ",n]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:i}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:l})]})]}),Object(h.jsx)("div",{className:"columns download",children:Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:j,className:"button",children:[Object(h.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})})]})}}]),a}(t.Component),O=function(e){Object(l.a)(a,e);var s=Object(j.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.school}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.graduated})]}),Object(h.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.company}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsx)("em",{className:"date",children:e.years})]}),Object(h.jsx)("p",{children:e.description})]},e.company)})),t=this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:e.level},className:s}),Object(h.jsx)("em",{children:e.name})]},e.name)}));return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:a})]}),Object(h.jsxs)("div",{className:"row skill",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Skills"})})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("div",{className:"bars",children:Object(h.jsx)("ul",{className:"skills",children:t})})]})]})]})}}]),a}(t.Component),p=function(e){Object(l.a)(a,e);var s=Object(j.a)(a);function a(){return Object(n.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var s="images/"+e.image;return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsx)("div",{className:"item-wrap",children:Object(h.jsxs)("a",{href:e.url,title:e.title,children:[Object(h.jsx)("img",{alt:e.title,src:s}),Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"portfolio-item-meta",children:[Object(h.jsx)("h5",{children:e.title}),Object(h.jsx)("p",{children:e.category})]})}),Object(h.jsx)("div",{className:"link-icon",children:Object(h.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Works."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),a}(t.Component),x=a(2),f=a.n(x),v=a(7),N=a(14),g=a(13),w=a.n(g),y=a(10);a(24);a(25).config();var k=function(){var e=Object(N.a)(),s=e.register,a=e.errors,t=e.handleSubmit,c=e.reset,r=function(){var e=Object(v.a)(f.a.mark((function e(s){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={name:s.name,email:s.email,subject:s.subject,message:s.message},e.next=4,w.a.send("service_w6q96ln","template_dkqrh8e",a,"user_4heKAi9Z2EI0qKTzN1Obi");case 4:c(),Object(y.b)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(s){return e.apply(this,arguments)}}();return Object(h.jsx)("section",{id:"contact",children:Object(h.jsxs)("div",{className:"row section-head",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:"Contact Me"})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"nine columns",children:[Object(h.jsx)("div",{className:"contactForm",children:Object(h.jsxs)("form",{id:"contact-form",onSubmit:t(r),noValidate:!0,children:[Object(h.jsxs)("div",{className:"row formRow",children:[Object(h.jsxs)("div",{className:"col-6",children:[Object(h.jsx)("input",{type:"text",name:"name",ref:s({required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}}),className:"form-control formInput",placeholder:"Name"}),a.name&&Object(h.jsx)("span",{className:"errorMessage",children:a.name.message})]}),Object(h.jsxs)("div",{className:"col-6",children:[Object(h.jsx)("input",{type:"email",name:"email",ref:s({required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}),className:"form-control formInput",placeholder:"Email address"}),a.email&&Object(h.jsx)("span",{className:"errorMessage",children:"Please enter a valid email address"})]})]}),Object(h.jsx)("div",{className:"row formRow",children:Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("input",{type:"text",name:"subject",ref:s({required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}}),className:"form-control formInput",placeholder:"Subject"}),a.subject&&Object(h.jsx)("span",{className:"errorMessage",children:a.subject.message})]})}),Object(h.jsx)("div",{className:"row formRow",children:Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("textarea",{rows:3,name:"message",ref:s({required:!0}),className:"form-control formInput custome",placeholder:"Message"}),a.message&&Object(h.jsx)("span",{className:"errorMessage",children:"Please enter a message"})]})}),Object(h.jsx)("button",{className:"submit-btn",type:"submit",children:"Submit"})]})}),Object(h.jsx)(y.a,{})]})})]})})},C=function(e){Object(l.a)(a,e);var s=Object(j.a)(a);function a(e){var t;return Object(n.a)(this,a),(t=s.call(this,e)).state={foo:"bar",resumeData:{}},t}return Object(i.a)(a,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{data:this.state.resumeData.main}),Object(h.jsx)(u,{data:this.state.resumeData.main}),Object(h.jsx)(O,{data:this.state.resumeData.resume}),Object(h.jsx)(p,{data:this.state.resumeData.portfolio}),Object(h.jsx)(k,{data:this.state.resumeData.main}),Object(h.jsx)(b,{data:this.state.resumeData.main})]})}}]),a}(t.Component),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(s){var a=s.getCLS,t=s.getFID,c=s.getFCP,r=s.getLCP,n=s.getTTFB;a(e),t(e),c(e),r(e),n(e)}))};r.a.render(Object(h.jsx)(C,{}),document.getElementById("root")),D()}},[[28,1,2]]]);
//# sourceMappingURL=main.1ce9f43b.chunk.js.map