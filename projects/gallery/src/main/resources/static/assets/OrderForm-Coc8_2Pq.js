import{r as k,c as _,b as n,d as e,t as d,F as h,e as x,g as a,v as i,p as g,q as B,w as I,o as m,u as V}from"./index-Dx2Isx7B.js";import{a as E}from"./orderService-BlWX2cgg.js";import{g as S}from"./cartService-CGHZ3AnR.js";const M={class:"container"},U={class:"row g-5"},L={class:"col-md-5 col-lg-4 order-md-last"},F={class:"mb-3"},P={class:"badge bg-primary rounded-pill align-middle"},j={class:"items list-group mb-3"},C={class:"p-3 list-group-item d-flex justify-content-between"},D={class:"my-0"},O={class:"text-muted"},R={class:"border p-4 bg-light h5 rounded text-center total-price"},T={class:"col-md-7 col-lg-8"},q={class:"row g-3"},$={class:"col-12"},z={class:"col-12 pt-1"},A={class:"my-3"},G={class:"form-check"},H={class:"form-check"},J={key:0,class:"pt-1"},Y={__name:"OrderForm",setup(K){const v=V(),s=k({items:[],form:{name:"",address:"",payment:"card",cardNumber:""}}),u=_(()=>{let r=0;return s.items.forEach(t=>{r+=t.price-t.price*t.discountPer/100}),r}),w=async()=>{var t,o,c,p,f,b,y;if((t=s.form.name)!=null&&t.trim())if((c=s.form.address)!=null&&c.trim()){if(s.form.payment==="card")if((f=s.form.cardNumber)!=null&&f.trim()){if(s.form.cardNumber.length>16||parseInt(s.form.cardNumber).toString()!==s.form.cardNumber){window.alert("카드 번호는 16자 이하의 숫자로만 입력해주세요."),(y=document.getElementById("cardNum"))==null||y.focus();return}}else{window.alert("카드 번호를 입력해주세요."),(b=document.getElementById("cardNum"))==null||b.focus();return}}else{window.alert("주소를 입력해주세요."),(p=document.getElementById("address"))==null||p.focus();return}else{window.alert("이름을 입력해주세요."),(o=document.getElementById("name"))==null||o.focus();return}if(s.form.payment!=="card"&&(s.form.cardNumber=""),s.form.itemIds=s.items.map(l=>l.id),(await E(s.form)).status===200){const l=["주문이 완료되었습니다."];if(s.form.payment==="bank"){const N=u.value.toLocaleString();l.push(`한국은행 123-456789-777 계좌로 ${N}원을 입금해주시기 바랍니다.`)}window.alert(l.join(`
`)),await v.push("/")}};return async function(){const t=await S();t.status===200&&(s.items=t.data)}(),(r,t)=>(m(),n("form",{class:"order-form",onSubmit:I(w,["prevent"])},[e("div",M,[t[15]||(t[15]=e("div",{class:"py-5 text-center"},[e("div",{class:"h4"},[e("b",null,"주문하기")]),e("p",{class:"h6 font-lg mt-3"},"주문 내역을 확인하시고 주문하기 버튼을 클릭해주세요")],-1)),e("div",U,[e("div",L,[e("div",F,[t[5]||(t[5]=e("span",{class:"h5 mb-3 align-middle me-2"},[e("b",null,"구입 목록")],-1)),e("span",P,d(s.items.length),1)]),e("ul",j,[(m(!0),n(h,null,x(s.items,o=>(m(),n("li",C,[e("div",null,[e("h6",D,d(o.name),1)]),e("span",O,d((o.price-o.price*o.discountPer/100).toLocaleString())+"원 ",1)]))),256))]),e("div",R,[t[6]||(t[6]=e("span",null,"합계 ",-1)),e("b",null,d(u.value.toLocaleString())+"원",1)]),t[7]||(t[7]=e("button",{type:"submit",class:"w-100 btn btn-primary py-4 mt-4"},"결제하기",-1))]),e("div",T,[t[13]||(t[13]=e("div",{class:"h5 mb-3"},[e("b",null,"주문자 정보")],-1)),e("div",q,[e("div",$,[t[8]||(t[8]=e("label",{for:"name",class:"form-label"},"이름",-1)),a(e("input",{type:"text",class:"form-control p-3",id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>s.form.name=o)},null,512),[[i,s.form.name]])]),e("div",z,[t[9]||(t[9]=e("label",{for:"address",class:"form-label"},"주소",-1)),a(e("input",{type:"text",class:"form-control p-3",id:"address","onUpdate:modelValue":t[1]||(t[1]=o=>s.form.address=o)},null,512),[[i,s.form.address]])])]),t[14]||(t[14]=e("div",{class:"h5 mt-5 mb-3"},[e("b",null,"결제 수단")],-1)),e("div",A,[e("div",G,[a(e("input",{id:"card",name:"paymentMethod",type:"radio",class:"form-check-input",value:"card","onUpdate:modelValue":t[2]||(t[2]=o=>s.form.payment=o)},null,512),[[g,s.form.payment]]),t[10]||(t[10]=e("label",{class:"form-check-label",for:"card"},"신용카드",-1))]),e("div",H,[a(e("input",{id:"bank",name:"paymentMethod",type:"radio",class:"form-check-input",value:"bank","onUpdate:modelValue":t[3]||(t[3]=o=>s.form.payment=o)},null,512),[[g,s.form.payment]]),t[11]||(t[11]=e("label",{class:"form-check-label",for:"bank"},"무통장입금",-1))])]),s.form.payment==="card"?(m(),n("div",J,[t[12]||(t[12]=e("label",{for:"cardNum",class:"form-label"},"카드 번호",-1)),a(e("input",{type:"text",class:"form-control p-3",id:"cardNum","onUpdate:modelValue":t[4]||(t[4]=o=>s.form.cardNumber=o)},null,512),[[i,s.form.cardNumber]])])):B("",!0)])])])],32))}};export{Y as default};
