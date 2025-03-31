// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This file was generated by scripts/generate-benchmark.py, do not modify!

const dataBig = [{
  a: '0xBC0D574BA840F8BB45B49A84385EAA43294B64',
  b: '-0x4334A49EFD48E20DDCA1CBF1E7FEE6690FF49C3B684D58716A7EE',
  r: '-0x4334A49EFD48E2061C74BF4B63F16DDD54BD3478EDA7FC43FEC8A',
}, {
  a: '0x338924B27023965261EA315A5A37D6849182EC5835F414B4B7C',
  b: '0x797C246E2FDE8802AE042D48B3D85D7B7AF6A9469B147E5C191',
  r: '0x4AF500DC5FFD1E50CFEE1C12E9EF8BFFEB74451EAEE06AE8AED',
}, {
  a: '0x7C2C2DBD309438F314F5AE39620F4C1FDC761701C775501B6949DC7D3343A660172',
  b: '0x3668CD044B2A747702EC346A45E41A87BAAE7DC18E0D2231DA57BE07650A573',
  r: '0x7C2C1BD5FD9073D96082ACD5566509FBC6F1ADAFBAB4DE164B78062A8D44C36A401',
}, {
  a: '-0x616FD9E9F8AA707C1547250732713F6880444770400249EDB49EE922C33',
  b: '-0xFBCBCFCC02AF7E306CEDBC82FCF145B771FBCDD9058B72362965898238CE0',
  r: '0xFBAAA015EB57D44010F8FBA7FBC33488197B899E75CB707FC4D1176B1A0ED',
}, {
  a: '0x1C13ACB5A47BCD84C2C9127020BD4C8F03CC996FFC3C521D7D25DF7',
  b: '-0x56CAF351447CFBB7951D952E19CE08B07C217F7B055CC8053',
  r: '-0x1C13ACE36E889CC0BE32A5E53D286296CDC42913DD43291821EDDA6',
}, {
  a: '0xC49CACE6C2C77565148101F471A602760210',
  b: '-0xD5F8BDF7FECD9C2FE23BFDE621FAA8F1941AFB5237054E8D97',
  r: '-0xD5F8BDF7FECD9CEB7E971B24E68FCDE5151B0F239107388F87',
}, {
  a: '0x5A8D3A63B2BE1BAD633BF4DBF3DF2362705DACCFDA957575D5DA8B7',
  b: '0x3ABDB9A685095DDD1D5B13599B89305B66FBA311AF',
  r: '0x5A8D3A63B2BE1806B8A19C8B6602F2B7C16835774990C31A6FEB918',
}, {
  a: '0x661BBE01013CF57ACE2F8CFE33B3AB31F029EF03FAE8078CB9F8B2D2C2FCB0F9',
  b: '-0x3E56CCF2B96D574C4B20E265CCB318D07A25829DB4AFFE30267340D709A30CC4',
  r: '-0x584D72F3B851A236850F6E9BFF00B3E18A0C6D9E4E47F9BC9F8BF205CB5FBC3B',
}, {
  a: '-0x6ED20B238349247197132A805222A4088AF30',
  b: '-0x8997FEB30072D662C5AAD5BEFE17BE8C70042D1E543C36A9E59BD71694046E832ED88D',
  r: '0x8997FEB30072D662C5AAD5BEFE17BE8C76E90DAC6C08A4EEFCEAE5BE912644C3A677A3',
}, {
  a: '-0x97AC9D89393E78A6E4A3704AA3393A90F1476920D7727BC57CF0D5681ECA4A8AD5',
  b: '-0xB83E72EA0D1BEF1B7E8D3FFD9AE3FADE0C8E5056AE83447863285E2E',
  r: '0x97AC9D89398646D40EAE6BA5B847B7AF0CDD8ADA097EF5952A5E562C66A962D4F9',
}, {
  a: '0x2575C0C9D6FD616696A4848019F8CD2B7B43DDA96',
  b: '0x1E530F1CB6DCA39BBCF1D84F923250C9512FA8',
  r: '0x257425F927360CACAF1F4B9D9D01EE0E77D6CF53E',
}, {
  a: '0x3F123477AFC93A8366B650F8A19B2773931FA0353F686350',
  b: '-0xD50434A4D97416422F1E7B6E5FD9C3CA5F0F8CF764FB0C5B254',
  r: '-0xD507C5879E0EEAD18728100B5053DA782836BD0D67A8FADD104',
}, {
  a: '0x935390A8464D59A355E55292FB6C4B9F23FDE312B9ECB4EA77FF887AD235BFABFBFA',
  b: '0xA4CC811B5D2EB04C187FEBB7DFB7F0440BF7DB5363A39C825F3B667B7F9752C0F',
  r: '0x9359DC6057F88B485124D56C4011B0E027BD5C6F0CDA8ED3BFDA7BCCB58246DED7F5',
}, {
  a: '-0x71B34124ED80EDE4E84622A20949CD56C419EE0A794D6F52C427D1EA',
  b: '0x75CBA7763A44B16B7156A22CCABA98ECD2C0EBD03B00DD4B44C568F5A006C14C',
  r: '-0x75CBA7764BF7F04F9CD64FC822FCBA4EDB892686FF1933413D8807A7642110A6',
}, {
  a: '-0xD832895944C46CB7023CF9F7F95EE97F90A6AA59A2EB751A48CE7409E',
  b: '-0x889F8097295E502602ED8BE1DC18A21BA73CB8AC41C060FC6F605',
  r: '0xD83201C6C45345E9521AFB1A72BF356732BD0D651A4734DA28321B699',
}, {
  a: '-0xBD347916361C079AA233EBA57C2F57B450EAF0530BB8C2360C',
  b: '0xF86404348AE278A3F0A9AF665CEBE380CCFFA840784',
  r: '-0xBD347919B05C44D20C14619A76B5A1D19E54C85FC442463190',
}, {
  a: '-0x679339F427E3969CF03921172DD9EA9AEB9246EDBE8',
  b: '0x4114FFCFF54F3921B82B300642EA48B1D27141BC77B',
  r: '-0x2687C63BD2ACAFBD481211116F33A22B39E30751C9D',
}, {
  a: '0xFE849E696C354DD7701ECF67E55ED56212C914EFA40B2E1CEAF8001F62D380B6A',
  b: '0xF1177C135597DFC76C75B8A1A878C581F18D2A9FCEF1E2DE75C734E',
  r: '0xFE849E696CC45AAB634B58B82232A0DAB3616C2A25FAA3367536F1FDBCA647824',
}, {
  a: '0x1460094DC5ADD93FF7E20139749E9629951',
  b: '0xE202075654BA22E89CA9BC9288E29846A434D70C506320D8551E5',
  r: '0xE202075654BA22E89CBDDC9BC527359F9BC3350D6917BE4E7C8B4',
}, {
  a: '-0xE4EBF26829154DCD089F3E4B456C898362691',
  b: '0xE1B46B476D9F5F38AD16921163115268AC5BA71A11E9595D627A02023419B9B0',
  r: '-0xE1B46B476D9F5F38AD169211631F1CD78AD9364ECD39D0AE86CE54CAAC2F9F21',
}, {
  a: '0x9800743686DE172A0423E4B31ED260CB7030E886B054F35BCC861BB81FB82B02627BAD',
  b: '0x13197329CFF01CFA46804F2F48485AC7CCFE5A8E2478007643164A4C98',
  r: '0x9800743686DE0433770A2B430228264B3F1FA0CEEA933FA596083FC01FCE6814283735',
}, {
  a: '0x977ABB5D77F9CF66F7B0C6C7E07649CF0CBD491F036CAAE6D49ABC3',
  b: '-0x871DF268E571F729D8F1AAD9587945019181D69A91B1E77B2C1EAA5E768853C0F22',
  r: '-0x871DF268E571605363ACDD20971FB2B1574636ECD87EEBC66501A932DC6E875A4E3',
}, {
  a: '0x974F6A08CBEB809A21EAACE2A34D93D17970769ABB3F352FA2653185C52BB32B83090',
  b: '0xF104A2D890D5DFFCF18097827D14F759AB10DF3E5F4',
  r: '0x974F6A08CBEB809A21EAACE2A3BC9773A1E0A34547CEB5B8201825729C80A3F4BD564',
}, {
  a: '-0x2E2201C8AE6C626F8D41E4C03711C8358A3C175CF',
  b: '-0xC78B8BA223C8423E049EC031203F74722429BC',
  r: '0x2E2E7970144E5EEBAEA1AD2C3403CBC2CD1E55C75',
}, {
  a: '-0x54CC522135424551E7B341560746382D910E5618C',
  b: '-0x7B927ABC2EB961116AC4C30F4D54708E7A37F104A5A0F960AD',
  r: '0x7B927ABC2BF5A4337990E75A532F449B1A4392867CB01C0127',
}, {
  a: '0x43D5D0AF0D196145F55BD0B09585BC78437530EFC8034DC3',
  b: '0xECB2E35E54E77906183043CC177284F33AEDD6943555',
  r: '0x43D53C1DEE4735A28C5DC880D649AB0AC7860A021E977896',
}, {
  a: '0x903361DAA1548A812774FC37F17CC22E6B3F',
  b: '0xE363FB768704E164165FBD65EC6942638BB4F693CD87C0394859149B',
  r: '0xE363FB768704E164165F2D568DB3E3370135D1E731B031458A777FA4',
}, {
  a: '0xABB79E7DA10B5983C7D4F774B92A5149496B4D1A354E5C',
  b: '-0xF57565F6E0CE5AD63E88D80F5D0E8C011191A1CC9D5B2ACDCF002324F4F19F14F',
  r: '-0xF57565F6E0CE5AD63E826376BAD49CB489ADDC83EA10B868DB94B5902552CBF13',
}, {
  a: '0x7E4DE078AB24D2903E7B2F24E8EE3C44982F8A9',
  b: '0x4E2B08BD71F6E538CA771DCE9D4E6F9B72C2AC64AD9',
  r: '0x4E2B76F0918E4E1C18E723B5B26A87754E86344B270',
}, {
  a: '-0x3F9B96BE21908CDB0B39A70AB5D593C34B6B4642CBF3888B50B1998BADAD6E4E2D25E',
  b: '-0xD99CBCBA4F5C186BD5C537967AE14DEA05ECF0B8E44412FA003D3748BD3E',
  r: '0x3F9B96BE2C094710AFCC668C0889C0BA2CC5529C6BAD4780DEF5D8A40DAEBD3AA6F60',
}, {
  a: '-0xF03272833CBD9CF63470D585C379211C496B6',
  b: '-0xF23C1A21C6F7FA383C940F52A4DA3D5926F5F90E25976B',
  r: '0xF23C1A21C9F4DD100F5FD69DC79D30017AC26B1FE101DF',
}, {
  a: '-0x8FDAF650B030608CD31B14ABE1ED4C36733BE',
  b: '0x311BEFF77DA35F8B2440E5A205868A4DA9C27F9A8B15B',
  r: '-0x311BEFF7F279A9DB9470852ED69D9EE6482F33ACF82E7',
}, {
  a: '0xCE941EBF0A3925B8BFCDA16F97AAFC9C8E3AA6E6226A865DE1698672F8E',
  b: '-0x7339A14A7210645BF7BEB1D41985D1DF80E6A93C72A6D2711ABB89915E5',
  r: '-0xBDADBFF5782941E3487310BB8E2F2D430EDC0FDA50CC542CFBD20FE3A6B',
}, {
  a: '-0xD032148BA13D9DF39258FA30D55482E640DA41821F66AAFA81',
  b: '-0x33AF067AD84259D052D16B81065E213AF695A7230996624CA9CA9E0BB1B5282CF9',
  r: '0x33AF067AD84259D082E37F0AA763BCC964CD5D13DCC2E0AAE910DF89AED382D678',
}, {
  a: '0x3556B8C69B0CFD9B6B36E74CB64653BD94A14913C1324EC32E328',
  b: '-0x250B9291C023A1673967F885810FF034FB3',
  r: '-0x3556B8C69B0CFD9B6B13ECDE2786701CF3982EEB44B341331AC9B',
}, {
  a: '-0x9D1662E5B43C1ECB89E32B3B8E020A6C939C3F4ACC6530B9',
  b: '0x600FAF1193BF9D0D8DD1005253BF3478F30E333570EF60DCE95D',
  r: '-0x600F3207F15A2931931A89B17884BA7AF962A0A94FA5ACB9D9E6',
}, {
  a: '-0xD3AFF54CF1DF165E82E87B57037EB3E21A4452537450EBAE16795E',
  b: '-0x39EEE1F0ABF44A9950D3E9D4F0F43E8520F1960B824E14E7E378C1722E5F209B',
  r: '0x39EEE1F0AB27E56C1C2236C2AE76D6FE77F2E8B8605450B5B00C9199804959C7',
}, {
  a: '-0xF155EB696ADD00385507735DF6C4A82C105DA7B6626E1421',
  b: '-0xBD739686EA0DBBD56DE8BB7458DB5E676DC5C',
  r: '0xF155EB696AD6D7013D69D3864B9276A7A7182A038418C87B',
}, {
  a: '-0x7668D4F369749F2EF1731D60457194C6B60C5',
  b: '-0x457A0550C695065370BB36811EEF2B2A4B3C8F78668347D022AFD65B045E982BC3D93',
  r: '0x457A0550C695065370BB36811EEF2B2A3D545B8B0FF7D8FED3DCCB3B412F0CED75D56',
}, {
  a: '-0xA193FDEFA6A4A17146361E755A5A5DA06E2F2C',
  b: '0xC4B0A911F300D21862E81D49F1FBAE3266629D7001FF',
  r: '-0xC4B0A9B060FD3DBEC6496C0FC7E5DB683C3F3D1E2ED5',
}, {
  a: '0x69C480EF6DFF6F8DB5ECBC4A37298557E1FEEFD5',
  b: '-0x57FFD0353A19E27981162F181D3D454B5F08879DBC23E19DB0DC41F9BD9518',
  r: '-0x57FFD0353A19E27981162F71D9BDAA26A0670A28509FABAA99591618437AC3',
}, {
  a: '-0x3021CA5CC13D3B1994C57FDBBD0759B4EB7C5A8ED386A71ED4DF8DA60BDB1',
  b: '0x4B90EEE3BD277216626F1B055CF66E9CA9A955098',
  r: '-0x3021CA5CC13D3B1994C5344B53E4E493996A38E1C883FBE8BA43240F5ED29',
}, {
  a: '0x40C41DDF62BD57008FD79BEB5F4D97FE9F380F5581A7A40F9581DC1F8815D26546B4',
  b: '-0x52B9817C51493046B6BAB00AE7FF1C25F778397371005631903016533977F',
  r: '-0x40C41DDA492540C59B449F8034E69750E0C9CD0AF62433388584BF068B14B756D1CB',
}, {
  a: '0x6BFDD3D5D4DC77BE7F8C245970E3E61BB0357E91EA0',
  b: '0xE327D6652E363DE20A3CD2E7F04DA2FA46384F9760C3A41CF0A0FF388DDF3B4771',
  r: '0xE327D6652E363DE20A3CD2E14F909FA70BFF34709801E18BFE9E9E838E88D259D1',
}, {
  a: '-0xA1CEB62CA26BF269E63FF72AD5839135F2EC1CD1A9A017898A46B',
  b: '-0xF408490F55866EE04D4B677ECA9649A920A07B6CE915CB00565083B48D55',
  r: '0xF4084905496D0C2A6BF441E0A9693B0478996833C7D4061ACC51FB2C293E',
}, {
  a: '-0xD9D9A95A5406D2AC2A4B6BAF07666FAAB192BF830F7267D12D',
  b: '0x70A0693224DD8D0059A64B3F6FD2E5E683EAE37',
  r: '-0xD9D9A95A5401D8AAB9692677D763F5CE026442AD511A597F1C',
}, {
  a: '0x314F275AD07318F09CCE2E94F7558D43B34806B25A643',
  b: '-0xCA6685A725E1A55B10DC2D9DDC542C920D11',
  r: '-0x314F275ADCD570AAEE9034C146584F9A6E8D447B7AB54',
}, {
  a: '-0xA58C0E421B4EB3FF149FFD482F4E763956715D306A89F971CC79BEA2',
  b: '-0x494F90C8578C4BD1E618F9C2C4507DB230B8AAE91',
  r: '0xA58C0E421B4EB3FB8066F1CD578ACB2737FEC11C2F8E2252C7F31031',
}, {
  a: '0xCA1B1E126072D0E82F4984EA122D094084658F00F8AE5F794D82FF3571564E310A6546',
  b: '-0xB39AE8EA98A1A3F66C403E99B32EB69B4BDBC70AF9F95956AC05AF212F9CB7C26CDD0D',
  r: '-0x7981F6F8F8D3731E4309BA73A103BFDBCFBE480A0157062FE18750145ECAF9F366B84B',
}, {
  a: '-0xA7C45ED7315F81E870B77559F8F1B87B18167E0D22AC533559204F04C19044DDFCBCC',
  b: '-0x5539515A184FDC72612AE8CE9FBDF981E456CC5108F',
  r: '0xA7C45ED7315F81E870B77559F8A4812A420E31D150CD79DD97BFF2FD40741211ADB45',
}, {
  a: '0xAEAC0A71E929F623B627BFFED0FCFAB5B6EC2B394DAFB7ADCAA04EACC91837B',
  b: '-0xF9BF6AE40E960E6A3314CB962B429C18020128EBD89EF152E7C0E506FCAC8',
  r: '-0xAE55B51B0D27602DDC14AB3546D7B829AEEE2A11A677295C98478E49CFE49BD',
}, {
  a: '0x2AAE71CC683D6770EC57C647F142806ABA568909F5CD66C0140BCE8509CBDA7651E0A4',
  b: '0x1D76C3EE260F197DB6B743BED2F5560C7D24844',
  r: '0x2AAE71CC683D6770EC57C647F142806B6D3AB7EB953CF11B7F7FF568269EBAB183A8E0',
}, {
  a: '0xEB15EFCA7E671408E188FF7AA22A16D2F9DDF121C94ECF8',
  b: '-0x88BF507A5C4E6B3A7A11DECC86DA34C57156325CF07475C6E3B7A730A0B6760C342FE4',
  r: '-0x88BF507A5C4E6B3A7A11DEC23784C862972772D2E8FB826CC116CA1F3D696410A0C31C',
}, {
  a: '-0xB24C40C2C34D82A527E9C8E0537879B67A1D91688A1C0C618F6BB5778',
  b: '0x4B3D70BE405EF8F00D23078551E6E76CF0F33002CF0D6C4B64DC01F5F50DC8F',
  r: '-0x4B3D700C0C1E3A3340A1A2A2B82E073F888A8678D29C04C178D0607A9EB8BF9',
}, {
  a: '-0xAA836164F5529739AC9A8F8B51B54D383397921A837347525CA07AFE54A2B',
  b: '-0xBDF3BDED22580A1221E330AFED38AC02AE2A6D61CBD2E72D50CCDB8E86D2DE',
  r: '0xB75B8BFB6D0D2361BB2A98575823F8D12D13144063E5D3587506DC216398F7',
}, {
  a: '0xABF2B5CEB402E44D5C120DE17E46D6F8A11631F0AE3DEFB32E71F89A6',
  b: '-0x3DEF2824954D57C3E615B1DD97ABE644F8EE0E6EE2B3932F7BC014B6EB484CDAC114',
  r: '-0x3DEF28249547E8E8BAFEF1F3D37E276426F9EA038D39824C64CAF768107AABC548B6',
}, {
  a: '-0xCE8139265B20DDEFFC1B0CE02BF22E84EBE65ABE308E94712103A3689B86D823EE',
  b: '-0x33B6F1CCAD402F05A0A7C632989CE53D485AA490A334079BAAECFB65E0489381EC1E',
  r: '0x337870F58B1B0FD84F5BDD3E78B71713CCB142CA1D04890FDBCDF8C688D31559CFF0',
}, {
  a: '-0x7A24926077305F63E3FD65DA7FDEC7350482845A8A4C0638',
  b: '0x14F90AA17DF56768778C8813C39F61687D1479F100C57F6ACE10E1',
  r: '-0x14F90ADB5967071F47D3EBF03EFABB17A3D34CF5824125E08216D7',
}, {
  a: '-0xB8EDFB562B2B256C50F0E51E5193D929C6EB59004831699D',
  b: '-0x6918FEE731D5388BDD85CE37D3314F14124783DD660FE45AFB972A7C',
  r: '0x6918FEE78938C3DDF6AEEB5B83C1AA0A43D45AF4A0E4BD5AB3A643E7',
}, {
  a: '0x423AF1633E4A2E7342D7BABFCFB42C09D0A8BA0878718F625611E8AE2BD1F22924E',
  b: '0x9459FD7456DBC1CBEC1EBCB212B42AFE083E3F633429491F66',
  r: '0x423AF1633E4A2E734B9225688AD990156E6951C3595ACDCDB6920B58189366B8D28',
}, {
  a: '0x2646871298E2843A9D93AFED83E6780AE9B01D07C46B7C32B57F8220BA99EBB8F13',
  b: '-0xE623972835B6F612525668E06EDC3CDE6A46',
  r: '-0x2646871298E2843A9D93AFED83E678048B896F849F041D1790190C26575A265E557',
}, {
  a: '-0x636492C63FE3DEE4E6936CED9FB87199BBB14E933FB2AC3E680EE791823',
  b: '0x28F0B50255A60E5BE669A3F5182B14A0C73CE79BB4B6832',
  r: '-0x636492C63FE3F6145391394B91E397F0184456B82B126B028F955327011',
}, {
  a: '0x36E50FE1598BF2689579AE21860A415FF39',
  b: '-0x395CFC2973244C3CFAE6F7CA5230224E41152E4DBD6239B9611B043DFC9',
  r: '-0x395CFC2973244C3CFAE6F7CA64D52DAF189EDC25281B9798E71145620F2',
}, {
  a: '-0xF5DF89F094DDBC90F6B63E2E351938C059D33',
  b: '0xFF86FF86FC3F0AC52EFD159A32C949700DFE8F3356A6',
  r: '-0xFF86FF89A1C795CC6326DC9559AAAB935C6D0336CB95',
}, {
  a: '0x8E8CA4D41896F742F5CB07F8AC9D2F461074A854CADE204B4F267986D177EFAB88D',
  b: '-0x7DFD7CA73508E38AF8E188524B5051245783309DD66017488182BE4B833AF',
  r: '-0x8E8CA4A9E5EA5077FD288D004D157D0D40258C0349EEBD9D2F31310753C9A428B24',
}, {
  a: '-0xAD82612A57839569AD400219232431D8AE09035',
  b: '0x52726696C494A21E4DA48C12D51306D17EBDF48798FA6F6573E8A7FCE5B5D',
  r: '-0x52726696C494A21E4DA48CBF57722C86FD289D2AD8F8764657D97F52ECB6A',
}, {
  a: '0xC2B88DD7B81FB76F6D66A90D3506E2A34C7FC0ECCD9B194F3E6FB44359A7ECD86C',
  b: '-0xD974742E594812833C4260D922E21C64352C5CB940153E',
  r: '-0xC2B88DD7B81FB76F6D6670794128BBEB5EFCFCAEAD423BAD220B816F051EACCD52',
}, {
  a: '-0x4140DDEE79920A6A4737CA8214E24502848ACF0',
  b: '0x1713F2C365B241F3E74629ABE1AF854536A002A47144C223D939FBA7',
  r: '-0x1713F2C365B241F3E35224750636A5E392D37E0C500AE673F1715749',
}, {
  a: '0xA1C028EF9E285E147D0E0439B26C31AA4B5C228BB2EC0C42FD',
  b: '0xA05935E29F42435C4CE9C4F8124782ED3180C35614',
  r: '0xA1C028EF3E716BF6E24C4765FE85F552591BA066836CCF14E9',
}, {
  a: '0x5E034AC1A7D520591BE76F07CA13B8BE3DCDFE',
  b: '-0x7D89D735BAB14256C3E1EF683E8D316E4E8',
  r: '-0x5E04925CD48E8B4D3E8B51193C90506D2B291A',
}, {
  a: '-0x230F1453581675A06F4AD9BE98B60EB7693B2CF3C676978BE37A64242FD5F0FEE5',
  b: '0x3E5433FA901E7794EA5542B5C28FAEE1F344F27CB9737EC8CCDF4E9A',
  r: '-0x230F14535828219395DAC7C90C5C5BF5DCF9A35D2785D3799FC3175AE7192FB07F',
}, {
  a: '0xF8BAB380877DD49562104B1E96C49A4D6CFDC6B960D73FC1792',
  b: '0xB95D5B1B3C9A565C7C450503596A618D4882DC58163B149',
  r: '0xF8BA0ADDDC66E80F344C375B93C7C3270D708E3BBC8F29FA6DB',
}, {
  a: '0xD3B70FCB96AAFF7459C46A5457AA300CCFDD8334FACF5CE3C4D87',
  b: '0x8D7748369B235916D21DFF3A24EC1B083474439CAD4C0F94FE172AEB1410A',
  r: '0x8D774836489456DD44B7004E7D28715C63DE739062918CA004D87608D0C8D',
}, {
  a: '-0x60125FC1FF3FCFCB182E53FCA74EC327B3A77B9775EE117D225CA1900222EB31F8',
  b: '0x705E9508883F7583D7F5870659EDCCCDD8B2EB7381E1CD840',
  r: '-0x60125FC1FF3FCFCB1F2BBAAC2FCD347F8ED823E71070CDB1FFD78F273A3CF7E9B8',
}, {
  a: '-0x61C53D9208C80389F75A92F4AD07FE092B80FAC15E22B92065C30A9BCBAABE15',
  b: '-0xF2922535F0927AEF344E002998DD334854707EEDF1EDBAF33EB24A911049A007F2CA',
  r: '0xF29244F0CD00722737C7F7730A299E4FAA79556D0B2CE4D187922F521AD26BAD4CDD',
}, {
  a: '0x86A49FA2560126025EB50205BB745C4E0C707A5387B20C',
  b: '-0xA0C9EC911C12DC88EB739B4B81D3C43824FCC24835A00D31',
  r: '-0xA04F480EBE44DDAEE92D2E498468B0646AF0B2326627BF3D',
}, {
  a: '0x6CF3E7FBF60E9B362E499E4F08C0B3DBD61',
  b: '-0xF0115FAA13C24331182118500BFF96EA4D42CDFC31F7C5FDB99B0806AF516902',
  r: '-0xF0115FAA13C24331182118500BFF9025733D729CD844A719207FF88AA46CD461',
}, {
  a: '0x588AE806A39740333010EA851E00EAF984BB3FCCAE',
  b: '-0x1CE4BE66C0F7896F16097E90031C9E614DD876B13632EFF96666A3EE5B7AEE724C482',
  r: '-0x1CE4BE66C0F7896F16097E90031916CFCDB24FC53501EEF7CE3743E0F4E2A5C1B0830',
}, {
  a: '-0x69AD76F659CAE3B0E163536F90E7CB55B922FEF52170C9',
  b: '-0x7F5C62B6218AE7CF744BBF6524F897D372E7AAF21C',
  r: '0x69AD09AA3B7CC23A06AC27242F82EFAD2EF18C128B82D3',
}, {
  a: '0xAFA37E230B8A07537DCB7669EBB396969910C6AF044AC37A52648E4ED9730F76884B8F',
  b: '0x1EFA1710B01245F12BCD13B70E9EAD2F9F6F3215B8F75021AB9B4B264E1',
  r: '0xAFA37E230B8BE8F20CC0774DB4A12A47A2602F45D6B33589733F013BDB69B6C23A2F6E',
}, {
  a: '0xACC1B31B03953108763D28B83BC2C2F99DE2E7E3B406AA9727C7C5163A1',
  b: '-0xD8077BE6594EC6EE7F1A6F5C3A406152E9218FB8B41ECC0FDBA4F6F5C63B8E',
  r: '-0xD80DB7FD68FEFFBD6F9D0C8EB1C3DD7EC6B85196CA258C6572D68A8997582D',
}, {
  a: '0x8692BABD1A62589C07B15655FE25F0771CCA68BBF17E',
  b: '-0xE2BBC676E90626BA7347668490419FF3D98397AEEFE7BE8',
  r: '-0xE2B3AF5D42D7809FFA871D91F51E7DACDEF25B086458A9A',
}, {
  a: '0x47876103896614A370F9385E257CC362352466D',
  b: '0x93DB2C24A60CF26F92F86FE15C91C93DE170F0DFEDF851F9EBF49941',
  r: '0x93DB2C24A60CF26F968019F16407A877D67F635A0FAF9DCFC8A6DF2C',
}, {
  a: '-0x8583AB34839211A39B5492AAED66AB735E6E777CBC59EB60C02668FA41780AC5499B',
  b: '0x11E7E9EDA62D73604840225EA1DE3568CF013E7E3000944223EAE47829290ACBD45E26',
  r: '-0x11626A4692AEE171EBDB76CC0B3353C3BC5F50094CBCCDA9432AC210D36872C11117BD',
}, {
  a: '0x199D48CEF4899C297309A18B7AF04C97CF102995380B794AF74FF2F6F20110453CBA',
  b: '-0x844196498EA2F2EBD2E64F614E76D84EED1AAF2F8732DA525CCB090E1C1E7290',
  r: '-0x199DCC8F62C0128B81E2736D359102E1175EC48F9724FE782D1DAE3DFB0F0C5B4E36',
}, {
  a: '-0x8F67BD251CBD24B2ACA0F31A24D62DEDC7E5D031C3EC4CEDD8EAD0F68292EF91C0F2',
  b: '-0x7DA7845F0AC4BDCB7CDCC37BE900351D6B7A2C197DF43D',
  r: '0x8F67BD251CBD24B2ACA0F367835272E703581B4D1F2F3704D8DFCD9DF8BEF6EC34CD',
}, {
  a: '-0x4CAE7EAE65AE55D088A854493AE0DF752A4DE14',
  b: '-0xDDCFC5E285169EA49717D69841EC2693A6C0473D5DBE1ED2A702FAB2CD606A1C45',
  r: '0xDDCFC5E285169EA49717D69841E8EC744C261DD800B69457E39154BF3A32CEC257',
}, {
  a: '0xF34F6FDE6ACB2EE02FDD6895F73DB49FCFD1F06D08DE06',
  b: '0x97C2F4CBE744BC31E81E1888A785A172FEBD2827CE706E43FAD711CC8CB2',
  r: '0x97C2F4CBE744BCC2A771C6E26CAB415D23D5BDD0F3C4F18C2B277CC452B4',
}, {
  a: '-0x33D6943E287680BBA8D14EC867BEF9F3FDA1EA172373457797789',
  b: '-0xB041A7C6295A80DA5D9B24EB950AA4E3B172C4',
  r: '0x33D6943E287680B0ACCB32AAF216F4562413A4AE73D90B4C8054B',
}, {
  a: '-0xF3726FEC6EC55A352EBD4A6CFF1C4636B79E00C23479EE58F',
  b: '-0x896C83249AED4DFEE50FECCC88E5E17D6F1B',
  r: '0xF3726FEC6EC552A3E68F03C22BC3A8664952C84C6A6E38A94',
}, {
  a: '-0x983A0A1ED8F3774F1958ED384CBC6CFB42B37015BC03BDEFBD9994',
  b: '-0x1BA73D6011B62B5017EF5CB30473908C7E2B32378FE42F389DFDEEE33BDD',
  r: '0x1BA73DF82BBC3588E49813AA5C9EA8C0C247C9753C943A849E40015EA24F',
}, {
  a: '0xB158A993265E97B2870F16FC4A66B732FD23075A82C7CF0E',
  b: '-0x5E4FB12A59961ABA72919EC21D86E2E1790B148E4DB00142EADF58C9',
  r: '-0x5E4FB12AE8CEB32954CF09709A89F41D336DA3BCB0930618681897C7',
}, {
  a: '-0x2DA9D46057C36322736BFEA84CA0594D9A233C6DC65DDA9DAC',
  b: '0x68C4B5576AF54F016073F36F249CE45677F2905408EF84EFAC1ED3A0E8DB',
  r: '-0x68C4B5576AD8E6D50024300C06EF8FA8DFBE300D4575A7D3C1D88E7A7571',
}, {
  a: '-0x36D116E918B95AD905406C1BCB513D6AA5DE90F77FC99',
  b: '-0xD575323AE026B3BCF539D2A4C1193AD78EC90C41F981164135',
  r: '0xD5753157F1482237609442F0C7D886629D1FA61C108E61BDAC',
}, {
  a: '0x3FC760FC5DC4F8BCB413E64FC4C92114AC0901EC9AB78A41A6D23D548',
  b: '-0x7DFD0C0C1CDDF994BC9178F88CB5A72D953A27D',
  r: '-0x3FC760FC5DC4F8BCB46E1B43C8D5FCED38B59094623B3FE68B4707735',
}, {
  a: '-0xB943C0BB25B9EEC7187CFE53891B50F49FE5E620711C1E1CFF3A533EBC',
  b: '-0xA0DFB3F1C646C620A67037152AE21E0E819BBD0709F78AFFE5D5A053',
  r: '0xB9E31F08D47FA80138DA8E649C31B2EA91647D9D7615E99600DF869EE9',
}, {
  a: '0x1577B7B71E43218B9BE192F3B0B9297CC231215192BE1D9BCF27',
  b: '0xAD93BE269FFEA41964D53490F9C7014F46481B7EAEAD2',
  r: '0x1577B7BDC778C3E2640BD365FDEA60735E4135A5F63FAA7125F5',
}, {
  a: '-0xC0E02DB172AD239215DA45DBDF5A2E545D6C08EA7CAAFA1',
  b: '-0xFF8D969F9AFFAA7A21E8ECDB4FB0B93F633ED92FB2F088469198B8559D11A',
  r: '0xFF8D969F9AFFAABAC1C55DA9E2932B2AB97B02F0E8DEDC1BFD90522937EB9',
}, {
  a: '-0xFA20FD22EE88E58DC5E638FE50FF130A42FF233616CE8D680684680B05DCE0DE2',
  b: '-0x24D10C078D4D45F2F81832A90B79D28F12AE4436914FCCC9E8688CA6EFB0A8FD',
  r: '0xF86DEDE2965C31D2EA67BBD4C0488E22B3D5C7757FDA71A49802E0C16B27EA51D',
}, {
  a: '0x94D8D86AB7E480D3F447B1C289D56E92AE67DC0080387923',
  b: '-0xDCB642CE97AF7647B9BCCC8FBB11C4F2188156C2E4B2CE7948E55',
  r: '-0xDCB64B831A29DD39F1B1F3CBC00DEC6F4E687C249972C67ACF778',
}];

const dataSmall = [{
  a: '-0x3316A2F91A8',
  b: '-0xC14E4C4DA71',
  r: '0xF258EEB4BD7',
}, {
  a: '0xAD7',
  b: '-0x6E53296B2BF0D',
  r: '-0x6E53296B2B5DC',
}, {
  a: '0xF',
  b: '0x3D3409E',
  r: '0x3D34091',
}, {
  a: '0xF',
  b: '0x0',
  r: '0xF',
}, {
  a: '0x0',
  b: '0xCE167678BE51E47',
  r: '0xCE167678BE51E47',
}, {
  a: '0x17686D6',
  b: '-0x657C4562',
  r: '-0x640AC3B8',
}, {
  a: '-0xB85CAFB1961F1D9',
  b: '0xFDCEDCF92A0',
  r: '-0xB85C527F4AE6379',
}, {
  a: '0x57DE85FE32F45AB9',
  b: '-0xE66F59BEB2D2FE',
  r: '-0x5738EAA78C468845',
}, {
  a: '0xEB7A4DEAB39745',
  b: '0x9AB2',
  r: '0xEB7A4DEAB30DF7',
}, {
  a: '-0x326C063F51B1C4',
  b: '-0x4635',
  r: '0x326C063F51F7F7',
}, {
  a: '0x275B67FEDA3CD32',
  b: '0xB49D',
  r: '0x275B67FEDA379AF',
}, {
  a: '-0x3840A3ED4CEC',
  b: '0xA157C6D3F3CCD2',
  r: '-0xA16F86701E803A',
}, {
  a: '-0x6C70C08BEFA',
  b: '-0x4EE6FE86BBD366EE',
  r: '0x4EE6F841B7DBD814',
}, {
  a: '0x124626A68BE85',
  b: '-0x4B',
  r: '-0x124626A68BED0',
}, {
  a: '-0x84BEFA80050F',
  b: '-0x1EE1B65AA4EB443',
  r: '0x1EE9FDB50CEB14C',
}, {
  a: '0x3CD9CED0EA0',
  b: '0xE6176A057D5',
  r: '0xDACEA4D5975',
}, {
  a: '0x638A42',
  b: '-0x3D74F6',
  r: '-0x5EFEB8',
}, {
  a: '0x2F5DA4F7A511',
  b: '-0xC99C08F5',
  r: '-0x2F5D6D6BADE6',
}, {
  a: '-0xA5884BBF',
  b: '-0x662FDE8A74D',
  r: '0x6625860ECF2',
}, {
  a: '0x264397231F',
  b: '0x9D5A21C19AA',
  r: '0x9F3E18B3AB5',
}, {
  a: '-0x8D52D120',
  b: '-0xBDF4E94',
  r: '0x868D9F8C',
}, {
  a: '0xA683F9DDE2',
  b: '-0xF2D',
  r: '-0xA683F9D2CF',
}, {
  a: '0x8A1BBA7D35',
  b: '-0xA3C763A569F937',
  r: '-0xA3C7E9BED38404',
}, {
  a: '0x86053',
  b: '-0xF1777A395',
  r: '-0xF177FC3C8',
}, {
  a: '-0xA10AB2ADDF129E',
  b: '-0x4',
  r: '0xA10AB2ADDF129E',
}, {
  a: '0x477BA5',
  b: '0x8F0AD6FCC4462A',
  r: '0x8F0AD6FC833D8F',
}, {
  a: '-0x23F4777BA7564',
  b: '-0x838',
  r: '0x23F4777BA7D54',
}, {
  a: '0x3536D',
  b: '0xC818C86',
  r: '0xC82DFEB',
}, {
  a: '0x4FBAF9CC4299',
  b: '-0x580AF',
  r: '-0x4FBAF9C9C238',
}, {
  a: '0x4C58A3A182E247',
  b: '-0x73C59',
  r: '-0x4C58A3A185DE20',
}, {
  a: '-0x1D5C37',
  b: '-0x42C5FBDEF31F',
  r: '0x42C5FBC3AF28',
}, {
  a: '-0xF39478D',
  b: '0xA05DD13F2A58',
  r: '-0xA05DDE066DD5',
}, {
  a: '-0xECB2975626E77C',
  b: '-0xD670',
  r: '0xECB29756263114',
}, {
  a: '-0xC2FD8816CC3F',
  b: '0xC5A58B9',
  r: '-0xC2FD844C9488',
}, {
  a: '0x3738DF2669',
  b: '-0xA6F4D',
  r: '-0x3738D54926',
}, {
  a: '-0xF3B6D39DAEFC8',
  b: '0x444137B1',
  r: '-0xF3B6D7D9BD877',
}, {
  a: '-0x191',
  b: '0x0',
  r: '-0x191',
}, {
  a: '-0x71FFF',
  b: '0xE4B6AB9DA97',
  r: '-0xE4B6ABEC56A',
}, {
  a: '-0x75C51DA22686',
  b: '0x896E8CA7F88',
  r: '-0x7D53F568590E',
}, {
  a: '0xA',
  b: '-0x3B770',
  r: '-0x3B766',
}, {
  a: '-0x4660FFF',
  b: '0x221A841B2D15E84A',
  r: '-0x221A841B2973E7B5',
}, {
  a: '-0x4CA299A',
  b: '-0x7D',
  r: '0x4CA29E5',
}, {
  a: '-0x2',
  b: '0x7264310D65FA14D',
  r: '-0x7264310D65FA14D',
}, {
  a: '-0xD456',
  b: '0x9A',
  r: '-0xD4D0',
}, {
  a: '0x6',
  b: '-0x514',
  r: '-0x516',
}, {
  a: '-0xEEA6D3ADEA',
  b: '-0x133D8B4B',
  r: '0xEEB5EE26A3',
}, {
  a: '0x36D3F428844A',
  b: '-0xCCEF0119BC8',
  r: '-0x3A1D04391F8E',
}, {
  a: '0x0',
  b: '0xF795',
  r: '0xF795',
}, {
  a: '0x96CEB6C09EE14A',
  b: '-0xE4114DD24C0D0',
  r: '-0x988FA21DBA2186',
}, {
  a: '-0x161C8C05FF',
  b: '-0xF',
  r: '0x161C8C05F0',
}, {
  a: '-0x463',
  b: '0x9',
  r: '-0x46C',
}, {
  a: '-0x77A53FCAFA1E5',
  b: '0x3B6D',
  r: '-0x77A53FCAF9A8A',
}, {
  a: '-0xE495ACED8',
  b: '0x4D34',
  r: '-0xE495A83E4',
}, {
  a: '0xE1662BC883',
  b: '-0x30BB8A5C77',
  r: '-0xD1DDA194F6',
}, {
  a: '0x5',
  b: '-0xDBEDBFB64678',
  r: '-0xDBEDBFB64673',
}, {
  a: '0x5203C88D5',
  b: '0x0',
  r: '0x5203C88D5',
}, {
  a: '-0xCE38802',
  b: '0x17496ABE69CFC6B3',
  r: '-0x17496ABE652C4EB3',
}, {
  a: '-0xE3',
  b: '-0x9',
  r: '0xEA',
}, {
  a: '0x2',
  b: '-0x8CC57CB9BA9',
  r: '-0x8CC57CB9BAB',
}, {
  a: '0x43F303A92195AA54',
  b: '-0x3B1D67A',
  r: '-0x43F303A922247C2E',
}, {
  a: '0x7518',
  b: '-0xEC4',
  r: '-0x7BDC',
}, {
  a: '-0xC1D3F',
  b: '-0xBEE894A1',
  r: '0xBEE4899E',
}, {
  a: '0xB179C44B4F7',
  b: '0xACB7B69DD9EE5',
  r: '0xAC06CF5992A12',
}, {
  a: '0xF3AF54B84AE26AB',
  b: '-0xAF2439F1FF64C',
  r: '-0xF3007081BB1D0E1',
}, {
  a: '0x0',
  b: '0x0',
  r: '0x0',
}, {
  a: '-0x7E',
  b: '0x8E1A4F453',
  r: '-0x8E1A4F42F',
}, {
  a: '0x1EED5C9DF16C16',
  b: '0xADC1D333D59013C8',
  r: '0xADDF3E6F48617FDE',
}, {
  a: '-0x125D00DE7C58',
  b: '-0x455537612A8695',
  r: '0x45476A61F4FAC3',
}, {
  a: '-0xA608E76E0E',
  b: '0x76E975DAD',
  r: '-0xA1667033A1',
}, {
  a: '0xA93D3E600777',
  b: '-0x51575DB6',
  r: '-0xA93D6F375AC3',
}, {
  a: '-0x26E805C78',
  b: '-0xA3413C536C2DC3',
  r: '0xA3413E3DEC71B5',
}, {
  a: '-0x63FEB45BAB1B2F',
  b: '-0xF1A595DC7C3358BD',
  r: '0xF1C66B6827984392',
}, {
  a: '0xF216E5644BAF8',
  b: '-0xE32',
  r: '-0xF216E5644B4CA',
}, {
  a: '0x7AEA15230D701',
  b: '0x321A0',
  r: '0x7AEA15233F6A1',
}, {
  a: '-0xA',
  b: '-0xAA9FAC464099',
  r: '0xAA9FAC464091',
}, {
  a: '-0x9F',
  b: '0xE8364',
  r: '-0xE83FB',
}, {
  a: '0x0',
  b: '-0xEBF771478A90',
  r: '-0xEBF771478A90',
}, {
  a: '-0x5F32E',
  b: '0x0',
  r: '-0x5F32E',
}, {
  a: '0x739C983C05CC9',
  b: '0x0',
  r: '0x739C983C05CC9',
}, {
  a: '0x51C308CD',
  b: '-0x6C02868115673E1',
  r: '-0x6C0286840957B2E',
}, {
  a: '0x90334',
  b: '-0x8C5189DE52CB1BE',
  r: '-0x8C5189DE525B28A',
}, {
  a: '-0x85E72AB',
  b: '0x34B941290BD',
  r: '-0x34B9C4CE218',
}, {
  a: '0xA31216A1276A0769',
  b: '-0x68AFC',
  r: '-0xA31216A1276C8D93',
}, {
  a: '-0x33D619A269E',
  b: '0x93DEB73ADB',
  r: '-0x3AEBF2D1C47',
}, {
  a: '0x0',
  b: '0x0',
  r: '0x0',
}, {
  a: '0x63A84E6F8494F27F',
  b: '-0x1CEFCBD977B64C',
  r: '-0x63B4A1A45DE34435',
}, {
  a: '0xF8E1',
  b: '0x3F1C369834753892',
  r: '0x3F1C36983475C073',
}, {
  a: '-0xED2EC359E3D0',
  b: '0x2390B1',
  r: '-0xED2EC37A737F',
}, {
  a: '-0x7241F66DF',
  b: '0x5CC8',
  r: '-0x7241F3A17',
}, {
  a: '-0xC',
  b: '0x9A1D2E769F739B',
  r: '-0x9A1D2E769F7391',
}, {
  a: '0x3',
  b: '-0x9F98C029',
  r: '-0x9F98C02C',
}, {
  a: '0xA3C580',
  b: '0x6088782DFA',
  r: '0x6088DBE87A',
}, {
  a: '-0x68531D4',
  b: '0x0',
  r: '-0x68531D4',
}, {
  a: '0x7D14',
  b: '0xE9',
  r: '0x7DFD',
}, {
  a: '-0xD',
  b: '0xFC',
  r: '-0xF1',
}, {
  a: '0x2D646A9A',
  b: '-0xF6651588D77700B4',
  r: '-0xF6651588FA136A2A',
}, {
  a: '0xCFC96E1B5E2331',
  b: '0xD1720EDA8A2EE22',
  r: '0xDD8E983B3FCCD13',
}, {
  a: '-0x9F2',
  b: '-0xD69C65858F23B3',
  r: '0xD69C65858F2A43',
}, {
  a: '0x5F2894306449',
  b: '-0x9EE987E9',
  r: '-0x5F280AD9E3A2',
}, {
  a: '0x2D879656971AE22',
  b: '-0xA863F4',
  r: '-0x2D8796569D9CDD2',
}];

import JSBI from '../dist/jsbi.mjs';
const JSBigInt = JSBI.BigInt;

let errorCount = 0;

const dataBigNative = [];
const dataBigJsbi = [];
const dataSmallNative = [];
const dataSmallJsbi = [];

function hexParseN(s) {
  if (s.charCodeAt(0) === 0x2D) return -BigInt(s.slice(1));
  return BigInt(s);
}
function parseNative(d) {
  if (d.b) {
    return {a: hexParseN(d.a), b: hexParseN(d.b), r: hexParseN(d.r)};
  }
  return {a: hexParseN(d.a), r: hexParseN(d.r)};
}
function hexParse(s) {
  if (s.charCodeAt(0) === 0x2D) {
    const result = JSBigInt(s.slice(1));
    result.sign = true;
    return result;
  }
  return JSBigInt(s);
}
function parseJSBI(d) {
  if (d.b) {
    return {a: hexParse(d.a), b: hexParse(d.b), r: hexParse(d.r)};
  }
  return {a: hexParse(d.a), r: hexParse(d.r)};
}
function prepareData(src, dstNative, dstJsbi) {
  for (let i = 0; i < src.length; i++) {
    const d = src[i];
    dstNative.push(parseNative(d));
    dstJsbi.push(parseJSBI(d));
  }
}
prepareData(dataBig, dataBigNative, dataBigJsbi);
prepareData(dataSmall, dataSmallNative, dataSmallJsbi);


function testNative(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = d.a ^ d.b;
    if (d.r !== r) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: ^');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = d.a ^ d.b;
    }
  }
  // Confuse the compiler into thinking that the loop is needed :-)
  const d = data[data.length - 1];
  if (d.r !== r) throw new Error('no dead code elimination please');
  return Date.now() - t1;
}


function testJsbi(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = JSBI.bitwiseXor(d.a, d.b);
    if (!JSBI.equal(r, d.r)) {
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: bitwiseXor');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = JSBI.bitwiseXor(d.a, d.b);
    }
  }
  // Confuse the compiler into thinking that the loop is needed :-)
  const d = data[data.length - 1];
  if (!JSBI.equal(r, d.r)) throw new Error('no dead code elimination please');
  return Date.now() - t1;
}


const kRepsBig = 40000;
const kRepsSmall = 120000;

console.log('Testing bitwiseXor:');
console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSBI/big:     ' + testJsbi(dataBigJsbi, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSBI/small:   ' + testJsbi(dataSmallJsbi, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}
