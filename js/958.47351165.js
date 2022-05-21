"use strict";(self["webpackChunkirup_redesign"]=self["webpackChunkirup_redesign"]||[]).push([[958],{215:function(e,t,o){o.d(t,{Z:function(){return F}});var s=o(252),n=o(963),a=o(577);const l=e=>((0,s.dD)("data-v-31634171"),e=e(),(0,s.Cn)(),e),i={class:"container"},d={class:"modal fade",tabindex:"-1",id:"NewCaseModal"},r={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"},c={class:"modal-content"},u=l((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title"},"Add News"),(0,s._)("button",{type:"button",class:"btn-close",id:"close-modal","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),h={class:"modal-body"},m={class:"container"},p={class:"inputs"},f={class:"caseTitle form-floating mx-3 mt-3"},g=l((()=>(0,s._)("label",{for:"floatingInput"},"Title",-1))),w={class:"videoUpLoad mx-3 mt-3 p-3 d-flex align-items-center"},v={for:"caseCoverPhoto",class:"p-5 px-0"},_={key:0},b=l((()=>(0,s._)("i",{class:"fa-solid fa-image"},null,-1))),C=(0,s.Uk)("Upload News Cover Photo "),I=[b,C],N=["src"],P={class:"caseContent mx-3 mt-3"},k={class:"modal-footer"},y=(0,s.Uk)(" SAVE "),x={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"},U={class:"title position-relative"},L=l((()=>(0,s._)("h1",{class:"uppercase text-center d-flex justify-content-center"}," news ",-1))),D=l((()=>(0,s._)("span",{class:"d-flex justify-content-center add-btn align-items-center","data-bs-toggle":"modal","data-bs-target":"#NewCaseModal"},[(0,s._)("i",{class:"fa-solid fa-plus"})],-1))),R=[D],T={class:"content"},$=["onClick"],S=["src"],V={class:"card-body"},j={class:"card-title"},A={class:"card-text"};function E(e,t,o,l,b,C){const D=(0,s.up)("LoadingComponent"),E=(0,s.up)("vue-editor");return(0,s.wg)(),(0,s.iD)("main",null,[(0,s.wy)((0,s.Wm)(D,null,null,512),[[n.F8,b.loading]]),(0,s._)("div",i,[(0,s._)("div",d,[(0,s._)("div",r,[(0,s._)("div",c,[u,(0,s._)("div",h,[(0,s._)("div",m,[(0,s._)("div",p,[(0,s._)("div",f,[(0,s.wy)((0,s._)("input",{class:"type-in-box form-control",type:"text",placeholder:"Case Title","onUpdate:modelValue":t[0]||(t[0]=e=>b.newsInfo.title=e)},null,512),[[n.nr,b.newsInfo.title]]),g]),(0,s._)("div",w,[(0,s._)("label",v,[b.newsInfo.coverPhotoURL?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",_,I)),b.newsInfo.coverPhotoURL?((0,s.wg)(),(0,s.iD)("img",{key:1,src:b.newsInfo.coverPhotoURL,alt:""},null,8,N)):(0,s.kq)("",!0),(0,s._)("input",{type:"file",ref:"caseCoverPhoto",id:"caseCoverPhoto",onChange:t[1]||(t[1]=(...e)=>C.fileChange&&C.fileChange(...e)),accept:".png, .jpg, ,.jpeg"},null,544)])]),(0,s._)("div",P,[(0,s.Wm)(E,{modelValue:b.newsInfo.content,"onUpdate:modelValue":t[2]||(t[2]=e=>b.newsInfo.content=e),editorOptions:e.editorSettings,useCustomImageHandler:"",onImageAdded:C.imageHandler},null,8,["modelValue","editorOptions","onImageAdded"])])])])]),(0,s._)("div",k,[(0,s._)("button",{type:"button",class:"btn",onClick:t[3]||(t[3]=(...e)=>C.uploadNews&&C.uploadNews(...e))},[y,b.loading?((0,s.wg)(),(0,s.iD)("span",x)):(0,s.kq)("",!0)])])])])]),(0,s._)("div",U,[L,C.user?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,a.C_)(["plus-btn",{"scrolled-plus-icon":e.scrollPlusIcon}])},R,2)):(0,s.kq)("",!0)]),(0,s._)("div",T,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(b.allNews,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"card box-shadow",onClick:t=>C.redirectNewsContent(e.id)},[(0,s._)("img",{src:e.CoverPhotoURL,class:"card-img-top",alt:"align-items-auto"},null,8,S),(0,s._)("div",V,[(0,s._)("h5",j,(0,a.zw)(e.Title),1),(0,s._)("h6",A,(0,a.zw)(e.TimeStamp),1)])],8,$)))),128))])])])}var H=o(287),O=o(377),q=o(652),Z=o.n(q),z=o(911),B=o(153),J=o(257);H.Quill.register("modules/imageDrop",O.c),H.Quill.register("modules/imageResize",Z());var M={components:{VueEditor:H.VueEditor},created(){this.getAllNews()},data(){return{loading:null,allNews:[],newsInfo:{title:"",timeStamp:new Date,content:"",coverPhotoName:"",coverPhotoURL:""}}},computed:{user(){return this.$store.state.user}},methods:{async getAllNews(){const e=[],t=(0,J.hJ)(z.db,"News"),o=await(0,J.PL)((0,J.IO)(t,(0,J.Xo)("TimeStamp","desc")));o.docs.forEach((t=>{e.push({...t.data(),id:t.id})})),this.allNews=e,console.log(this.allNews)},redirectNewsContent(e){this.$router.push(`/news/${e}`)},fileChange(e){this.file=e.target.files[0];const t=this.file.name;console.log(t),this.newsInfo.coverPhotoName=t,this.newsInfo.coverPhotoURL=URL.createObjectURL(this.file)},imageHandler(e,t,o,s){const n=(0,B.iH)(z.tO,`NewsPhotos/Photos/${e.name}`),a=(0,B.B0)(n,this.file);a.on("state_changed",(e=>{console.log(e)}))},uploadNews(){if(""!=this.newsInfo.title)if(""!=this.newsInfo.coverPhotoURL&&this.file)if(""!=this.newsInfo.content){this.loading=!0;var e=this.newsInfo.timeStamp,t=e.toDateString();const o=(0,B.iH)(z.tO,`/NewsPhotos/CoverPhoto/${this.newsInfo.coverPhotoName}`),s=(0,B.B0)(o,this.file);s.on("state_changed",(e=>{console.log(e)}),(e=>{console.log(e),this.loading=!1}),(async()=>{const e=await(0,B.Jt)(s.snapshot.ref),o=(0,J.hJ)(z.db,"News");await(0,J.ET)(o,{Title:this.newsInfo.title,CoverPhotoName:this.newsInfo.coverPhotoName,CoverPhotoURL:e,Content:this.newsInfo.content,TimeStamp:t}),this.loading=!1,document.getElementById("close-modal").click(),this.$router.go(0)}))}else this.$snackbar.add({type:"error",text:"Please ensure new content field has been filled!"});else this.$snackbar.add({type:"error",text:"Please ensure cover photo has been updated!"});else this.$snackbar.add({type:"error",text:"Please ensure title field has been filled!"})}}},Q=o(744);const W=(0,Q.Z)(M,[["render",E],["__scopeId","data-v-31634171"]]);var F=W},958:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var s=o(252);function n(e,t,o,n,a,l){const i=(0,s.up)("NewsComponent");return(0,s.wg)(),(0,s.j4)(i)}var a=o(215),l={components:{NewsComponent:a.Z}},i=o(744);const d=(0,i.Z)(l,[["render",n]]);var r=d}}]);
//# sourceMappingURL=958.47351165.js.map