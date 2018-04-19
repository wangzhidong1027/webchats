import Vue from 'vue'
import Router from 'vue-router'
//quStore
import QuStore from '@/components/QuStore'
//detail
import Details from '@/components/JD/Details'


import Car from '@/components/Car'


//活动专用
import Activitytheme from '@/components/Activitytheme'

//愚人节

import Afd from '@/components/Afd/afd'

import Main from '@/components/Main'
import Account from '@/components/MyMain/Account'
import After from '@/components/MyMain/After'
import Discounts from '@/components/MyMain/Discounts'
import MyQudou from '@/components/MyMain/MyQudou'
import MyAddress from '@/components/MyMain/MyAddress'
import Record from '@/components/MyMain/Record'
import MyOrder from '@/components/MyMain/MyOrder'
import NeedPay from '@/components/Order/NeedPay'
import All from '@/components/Order/All'
import Cancel from '@/components/Order/Cancel'
import Complete from '@/components/Order/Complete'
import Wait from '@/components/Order/Wait'

//Login/regiser
import Register from '@/components/Register/Register'
import SetPassword from '@/components/Register/SetPassword'
import SetPhone from '@/components/Register/SetPhone'
import Login from '@/components/Login/Login'
import Reset from '@/components/Login/Reset'
import Agreement from '@/components/Register/Agreement'

//recharge
import Recharge from '@/components/Recharge/Recharge'
import Activate from '@/components/Recharge/Activate'
import ArRe3 from '@/components/Recharge/ArRe3'
import ArRe4 from '@/components/Recharge/ArRe4'

// import JDindex from '@/components/JD/JDindex'
import GoodsList from '@/components/JD/GoodsList'
import Classify from '@/components/JD/Classify'

// import Order from '@/components/Order/Order'
import OrderContent from '@/components/Order/OrderContent'
import Logistics from '@/components/Order/Logistics'


import SubmitOrder from '@/components/Order/SubmitOrder'

import Pay from '@/components/Pay/Pay'
import PayMoney from '@/components/Pay/PayMoney'
// import CardPay from '@/components/Pay/CardPay'
import SucceedPay  from '@/components/Pay/SucceedPay'

import ApplyFor from '@/components/ApplyFor/ApplyFor'
import ApplyPlan from '@/components/ApplyFor/ApplyPlan'


import AddAddress from '@/components/Address/AddAddress'


import JoiestCard from '@/components/WX/JoiestCard'
import JoiestTong from '@/components/WX/JoiestTong'
import Recycle from '@/components/WX/Recycle'

import Phone from '@/components/WX/Phone/Phone'
import Telephone from '@/components/WX/Phone/Telephone'
// import Flux from '@/components/WX/Phone/Flux'
import Inform from '@/components/WX/Phone/Inform'


//electronic card
//
   import CardClassify from '@/components/ElectronicCard/CardClassify/CardClassify'
   import CardList from '@/components/ElectronicCard/CardList/CardList'
   import CardDetails from '@/components/ElectronicCard/CardDetails/CardDetails'
// import Realname from '@/components/J_pay/Main/Realname'
// import Quick from '@/components/J_pay/Quick/Quick'
// import Select from '@/components/J_pay/Quick/Select'
// import QuickPay from '@/components/J_pay/Quick/QuickPay'
// import Sccessful from '@/components/J_pay/Quick/Sccessful'
//
// import J_pay from '@/components/J_pay/J_pay'
// import Protocol from '@/components/J_pay/Protocol'
// import J_main from '@/components/J_pay/Main/J_main'
// import J_index from '@/components/J_pay/J_index'
// import Dredge from '@/components/J_pay/Dredge'
// import J_service from '@/components/J_pay/J_service'
// import Natice from '@/components/J_pay/Service/Natice'
// import NaticeContent from '@/components/J_pay/Service/NaticeContent'
//
// import J_Record from '@/components/J_pay/Main/J_Record'
// import MyCard from '@/components/J_pay/Main/MyCard'
// import Approver from '@/components/J_pay/Main/Approver'
// import Credit from '@/components/J_pay/Main/Credit'
// import AddCredit from '@/components/J_pay/Main/AddCredit'

//旅游
import Travel from '@/components/Travel'
import TravelIndex from '@/components/Travel/index'
import AddTravel from '@/components/Travel/AddTravel'
import Publish from '@/components/Travel/Publish'
import Income from '@/components/Travel/Income'
import TravelPay from '@/components/Travel/Pay'
import History from '@/components/Travel/History'

Vue.use(Router)

export default new Router({
//	mode: 'history',
  	routes: [
       { path: '/Activitytheme', name: 'Activitytheme', component: Activitytheme },
		{path: '/Afd', name: 'Afd', component: Afd },
				{path:'/qustore',name: 'QuStore',component: QuStore},
				{path:'/car',name: 'Car',component: Car},
				{path:'/main',name: 'Main',component: Main,},
				{path:'/register',name: 'Register',component: Register,
				 	children: [
				 		{path: '/register/setphone',component: SetPhone},
            {path: '/register/setpassword',component: SetPassword},
            {path: '/register/agreement',component: Agreement},
					]},
				{path:'/login',name: 'Login',component: Login},
				{path:'/reset',name: 'Reset',component: Reset},
				{path:'/order',name: 'MyOrder',component: MyOrder,
					children: [
						{path: '/order/all',name: 'All',component: All},
						{path: '/order/wait',name: 'Wait',component: Wait},
				 		{path: '/order/needpay',name: 'NeedPay',component: NeedPay},
            {path: '/order/cancel',name: 'Cancel',component: Cancel},
            {path: '/order/complete',name: 'Complete',component: Complete},
            {path:'/order/*',redirect:"/order/all"}
					]},



				{path:'/recharge',name: 'Recharge',component: Recharge},
				{path:'/Activate',name: 'Activate',component: Activate},
				{path:'/ArRe3',name: 'ArRe3',component: ArRe3},
				{path:'/ArRe4/:orderId',name: 'ArRe4',component: ArRe4},


  	// {path:'/jd',name: 'JDindex',component: JDindex},
    {path:'/goodslist/:id',name: 'GoodsList',component: GoodsList},
    {path:'/details/:id',name: 'Details',component: Details},


    // Card
   	{path:'/cardclassify',name: 'CardClassify',component: CardClassify},
   	{path:'/cardlist/:id',name: 'CardList',component: CardList},
   	{path:'/carddetails/:id',name: 'CardDetails',component: CardDetails},

  	{path:'/account',name: 'Account',component: Account},
  	{path:'/myaddress',name: 'MyAddress',component: MyAddress},
  	{path:'/addaddress',name: 'AddAddress',component: AddAddress},
  	{path:'/applyfor/:alltype/:childorderid/:oneid',name: 'ApplyFor',component: ApplyFor},
  	{path:'/applyplan/:id/:goodsid',name: 'ApplyPlan',component: ApplyPlan},
  	{path:'/after',name: 'After',component: After},
  	{path:'/discounts',name: 'Discounts',component: Discounts},
    {path:'/record',name: 'Record',component: Record},
  	{path:'/myQudou',name: 'MyQudou',component: MyQudou},




    {path:'/classify/:catid',name: 'Classify',component: Classify},
    // {path:'/order/:state',name: 'Order',component: Order},
    {path:'/ordercontent/:childorderid/:ischild',name: 'OrderContent',component: OrderContent},
    {path:'/logistics/:btocorderid',name: 'Logistics',component: Logistics},

    {path:'/submitorder',name: 'SubmitOrder',component: SubmitOrder},
    {path:'/pay/:orderid',name: 'Pay',component: Pay},
    {path:'/paymoney/:way/:orderid',name: 'PayMoney',component: PayMoney},
    // {path:'/cardpay/:orderid',name: 'CardPay',component: CardPay},
    {path:'/succeedpay/:orderid',name: 'SucceedPay',component: SucceedPay},

    //J_pay
    // {path:'/jpay',name: 'J_pay',component: J_pay,
    //   children:[
    //     {path:'/jpay/main',name:'J_main',component:J_main},
    //     {path:'/jpay/jpay',name:'J_index',component:J_index},
    //     {path:'/jpay/dredge',name:'Dredge',component:Dredge},
    //
    //     {path:'/jpay/service',name:'J_service',component:J_service},
    //     {path:'/jpay/service/natice',name:'Natice',component:Natice},
    //     {path:'/jpay/service/natice/content/:id',name:'NaticeContent',component:NaticeContent},
    //     {path: '/jpay/main/record', name: 'J_Record', component:J_Record },
    //     {path: '/jpay/main/mycard', name: 'MyCard', component:MyCard },
    //     {path: '/jpay/main/approver', name: 'Approver', component:Approver },
    //     {path: '/jpay/main/realname', name: 'Realname', component:Realname },
    //     {path: '/jpay/main/credit', name: 'Credit', component:Credit },
    //     {path: '/jpay/main/addcredit', name: 'AddCredit', component:AddCredit },
    //     {path: '/jpay/protocol', name: 'Protocol', component:Protocol },
    //
    //     {path: '/jpay/quick', name: 'Quick', component:Quick },
    //     {path: '/jpay/quick/select/:oriderid', name: 'Select', component:Select },
    //     {path: '/jpay/quick/quickpay/:orderid/:cardid', name: 'QuickPay', component:QuickPay },
    //     { path: '/jpay/quick/pay/sccessful/:orderid', name: 'Sccessful', component:Sccessful },
    //     {path:'/jpay',redirect:"/jpay/jpay"},
    //     {path:'/jpay/*',redirect:"/jpay/jpay"}
    //   ]
    // },
    //旅游
      {path:'/travel',name: 'Travel',component: Travel,
        children:[
          {path: '/travel/index', name: 'TravelIndex', component:TravelIndex },
          {path: '/travel/addtravel', name: 'AddTravel', component:AddTravel },
          { path: '/travel/publish', name: 'Publish', component: Publish },
          { path: '/travel/income', name: 'Income', component: Income },
          { path: '/travel/TravelPay', name: 'TravelPay', component: TravelPay },
          { path: '/travel/history', name: 'History', component: History },
          {path:'/travel',redirect:"/travel/index"},
          {path:'/travel/*',redirect:"/travel/index"}
        ]
      },


    {path:'/joiestcard',name: 'JoiestCard',component: JoiestCard},
    {path:'/joiesttong',name: 'JoiestTong',component: JoiestTong},
    {path:'/recycle',name: 'Recycle',component: Recycle},
    {path:'/phone',name: 'Phone',component: Phone,
    	children: [
  	 		{path: '/phone/hf',component: Telephone},
        // {path: '/phone/ll',component: Flux},
        // {path: '/phone/inform',component: Inform},
	  	]},
    {path: '/inform',component: Inform},
    {path:'/',redirect:"/qustore"},
    {path:'*',redirect:"/qustore"}
	]
})
