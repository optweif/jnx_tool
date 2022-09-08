
 //  const _ = await import ('./lodash.js');
//  console.log();


 const KEYWORDS = {
     wRootOrder :'wRootOrder'
 }



 const sample_messages='';




    function isBrowser() {

     // Check if the environment is Node.js
     if (typeof process === "object" &&
         typeof require === "function") {
         return false;
     }

     // Check if the environment is
     // a Service worker
     if (typeof importScripts === "function") {
         return false;
     }

     // Check if the environment is a Browser
     if (typeof window === "object") {
         return true;
     }

     return false;
 }


//alert( window.hasOwnProperty('_'));



 if (  (typeof parseOUCHBuffer !== "undefined") ) {
     console.log('Fn parseOUCHBuffer is imported!!')
 }
 //if (isBrowser()){ await import('./lodash.js') }else{ global['_'] = (await import('./lodash.js')).default;}
// if (isBrowser()){  console.log('Running Browser'); }else{ console.log('running nodejs');global['_'] = (await import('./lodash.js')).default;}


 //Array.prototype.groupBy = function (x) {return _.groupBy(this,x) }
 //Object.prototype.toPairs = function (x) {return _.toPairs(this) }

// groupBy_ouch_order_token(  sample_messages.trim().split('\n').map(e=>JSON.parse(e)));



function groupBy_ouch_order_token (wEntries){

     if (  (typeof window !== "undefined") &&  !window.hasOwnProperty('_')) {

        global['_'] = (await import('./lodash.js')).default;
        console.log('loaded lodash lib into global scope!!')
    }
 
    let root_map = {};


    const transform_fn = ( ouch_msg, idx )=> {


        let PacketType = _.first(ouch_msg['PacketType']);
        let MessageType = _.first(ouch_msg['MessageType']);
        //  console.log(PacketType+MessageType)

        switch (PacketType + MessageType) {

            case 'UO' : {
                let wRootOrder = ouch_msg.OrderToken;
                ouch_msg.wRootOrder = wRootOrder
                root_map[wRootOrder] = ouch_msg.OrderToken;
            }
                break;


            case 'UX' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }
            }
                break;

            case 'UU' : {
                let ExistingOrderToken = ouch_msg.ExistingOrderToken;
                let ReplacementOrderToken = ouch_msg.ReplacementOrderToken;

                if (_.has(root_map, ExistingOrderToken)) {
                    ouch_msg.wRootOrder = root_map[ExistingOrderToken];
                    root_map[ReplacementOrderToken] = root_map[ExistingOrderToken];
                    break;
                }

                if (_.has(root_map, ReplacementOrderToken)) {
                    ouch_msg.wRootOrder = root_map[ReplacementOrderToken];
                    root_map[ReplacementOrderToken] = root_map[ReplacementOrderToken];
                    break;
                }

                if (!_.has(root_map,ExistingOrderToken)){
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.ExistingOrderToken;
                    ouch_msg.wRootOrder = ouch_msg.ExistingOrderToken;
                }

            }
                break;

            case 'SA' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }

            }
                break;

            case 'SD':
            case 'SC' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }
            }

                break;

            case 'SU' : {
                let ReplacementOrderToken = ouch_msg.ReplacementOrderToken;
                if (_.has(root_map, ReplacementOrderToken)) {
                    let wRootOrder = root_map[ReplacementOrderToken];
                    ouch_msg.wRootOrder = wRootOrder;
                } else {
                    let wRootOrder = ouch_msg.ReplacementOrderToken;
                    root_map[wRootOrder] = wRootOrder;
                    ouch_msg.wRootOrder = wRootOrder
                }
            }

                break;

            case 'SE' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }
            }
                break;

            case 'SJ' : {
                if (_.has(root_map, ouch_msg.OrderToken)) {
                    ouch_msg.wRootOrder = root_map[ouch_msg.OrderToken]
                } else {
                    let wRootOrder = ouch_msg.OrderToken;
                    root_map[wRootOrder] = ouch_msg.OrderToken;
                    ouch_msg.wRootOrder = ouch_msg.OrderToken;
                }
            }
                break;

            case 'SS' : {
                //System Event
            }
                break;
            case 'L' : {
                //Login
            }
                break;
            case 'A' : {
                //Login Accepted
            }
                break;

            case '+' : {
                //Soupbin Debug
            }

                break;

            default: {
            }

        }


        ouch_msg = {...{id:idx+1,wLine :idx+1},...ouch_msg}
     //   ouch_msg.wLine = (idx+1);
     //   ouch_msg.id = (idx+1);

        if (!_.has (ouch_msg,'wRootOrder')){ ouch_msg.wRootOrder="ADMIN"}
        return ouch_msg;

    }



   return wEntries.map( transform_fn)


}

function tryParseJSON (str){ try{ return JSON.parse(str); }catch(e){ return undefined; }}

function testm (){
  //  let _=lodash;
  // if (isBrowser()){
       return _.chunk(['a', 'b', 'c', 'd'], 2);
  // }else{
    //   return lodash.chunk(['a', 'b', 'c', 'd'], 2);
  // }

   //return  _.groupBy(sample_messages.trim().split('\n').map(e=>JSON.parse(e)),'OrderToken');


}

function test (){
    let data=groupBy_ouch_order_token(sample_messages.trim().split('\n').map(e=>JSON.parse(e)));
    console.log(JSON.stringify(data));
}
//console.log( groupBy_ouch_order_token(sample_messages.trim().split('\n').map(e=>JSON.parse(e))))

 //test()
export {  groupBy_ouch_order_token, testm};
// => { '4': [4.2], '6': [6.1, 6.3] }

