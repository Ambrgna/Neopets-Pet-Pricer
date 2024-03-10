const colors = ['8-bit', 'Agueena', 'Alien', 'Apple', 'Asparagus', 'Aubergine', 'Avocado', 'Baby', 'Banana', 'Biscuit', 'Blue', 'Blueberry', 'Brown', 'Burlap', 'Camouflage', 'Candy', 'Carrot', 'Checkered', 'Chocolate', 'Chokato', 'Christmas', 'Clay', 'Cloud', 'Coconut', 'Custard', 'Darigan', 'Desert', 'Dimensional', 'Disco', 'Durian', 'Elderly boy', 'Elderly girl', 'Electric', 'Eventide', 'Faerie', 'Fire', 'Garlic', 'Ghost', 'Glowing', 'Gold', 'Golden', 'Gooseberry', 'Grape', 'Green', 'Grey', 'Halloween', 'Ice', 'Invisible', 'Island', 'Jelly', 'Juppie Swirl', 'Lemon', 'Lime', 'Magma', 'Mallow', 'Maractite', 'Maraquan', 'Marble', 'Mosaic', 'Msp', 'Mutant', 'Oil', 'Oil Paint', 'Onion', 'Orange', 'Origami', 'Pastel', 'Pea', 'Peach', 'Pear', 'Pepper', 'Pineapple', 'Pink', 'Pirate', 'Plum', 'Plushie', 'Polkadot', 'Polka dot', 'Potato', 'Purple', 'Quiguki boy', 'Quigukigir', 'Rainbow', 'Red', 'Relic', 'Robot', 'Royal boy', 'Royal girl', 'Shadow', 'Silver', 'Sketch', 'Skunk', 'Snot', 'Snow', 'Speckled', 'Split', 'Sponge', 'Spotted', 'Sroom', 'Starry', 'Stealthy', 'Steampunk', 'Strawberry', 'Striped', 'Swamp Gas', 'Thornberry', 'Tomato', 'Toy', 'Transparent', 'Tyrannian', 'Ummagine', 'Usuki boy', 'Usuki girl', 'Valentine', 'Water', 'White', 'Woodland', 'Wraith', 'Yellow', 'Zombie'];

var pet = 'Poogle';

async function paintBrushData(){
  const pbs = [];

  colors.forEach(function (c) {
    var pb;
    if(c == 'Desert'){
      pb = 'Lost Desert Paint Brush';
    } else if(c == 'Disco'){
      pb = 'Disco Fever Paint Brush';
    } else if(c == 'Elderly boy' || c == 'Elderly girl'){
      if(!pbs.includes('Get Off My Lawn Paint Brush'))
        pb = 'Get Off My Lawn Paint Brush';
    } else if(c == 'Electric'){
      pb = 'Electric Blue Paint Brush';
    } else if(c == 'Fire'){
      pb = 'Fire, Fire, Your Pants On Fire Paint Brush';
    } else if(c == 'Island'){
      pb = 'Mystery Island Paint Brush';
    } else if(c == 'Sketch'){
      pb = 'Scritchy Sketchy Paint Brush';
    } else if(c == 'Strawberry'){
      pb = 'Strawberry Fields Forever Paint Brush';
    }  else if(c == 'Stealthy'){
      pb = 'Stealth Paint Brush';
    } else if(c == 'Royal boy' || c == 'Royal girl'){
      if(!pbs.includes('Royal Paint Brush'))
        pb = 'Royal Paint Brush';
    } else if(c == 'Usuki boy' || c == 'Usuki girl'){
      if(!pbs.includes('Usuki Paint Brush'))
        pb = 'Usuki Paint Brush';
    } else if(c == 'Robot'){
        pb = 'One-Use Robotification Zappermajig';
    } else if(c == '8-bit'){
      pb = '8-bit Power-Up Potion';
    } else {
      pb = c + ' Paint Brush';
    }
    
    pbs.push(pb);

  });
  console.log(JSON.stringify({
      name: pbs
    }));
  }

  async function chiaPopData(){
    const cps = [];

    colors.forEach(function (c) {
      var cp;

      cp = 'Magical ' + c + ' Chia Pop';

      cps.push(cp);

    });
    console.log(JSON.stringify({
        name: cps
      }));
    }

async function morphData(){
  const mps = [];

  colors.forEach(function (c) {
    var morphpotion = c + ' ' + pet + ' Morphing Potion';

    if(c == "Brown" && pet == 'Kiko'){
      mps.push('Potato Potion');
    } else if(c == "Pink" && pet == 'Lenny'){
      mp.push('Vengeful Scroll');
    } else {
      mps.push(morphpotion);
    }
  });
  console.log(JSON.stringify({
      name: mps
    }));
  }

  async function plushieData(){
    const plushies = [];
  
    colors.forEach(function (c) {
      var plushie = 'Magical ' + c + ' ' + pet;

      plushies.push(plushie + ' Plushie');
      plushies.push(plushie + ' Toy');

    });
    console.log(JSON.stringify({
        name: plushies
      }));
    }

  async function transmogsData(){
    const tps = [];

    var transmogs = pet + ' Transmogrification Potion';

    tps.push(transmogs);

    console.log(JSON.stringify({
        name: tps
    }));
  }

  paintBrushData();

  // GM_xmlhttpRequest({
  //   method: 'POST',
  //   url: 'https://itemdb.com.br/api/v1/items/many',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data: JSON.stringify({
  //     name: mp
  //   }),
  //   onload: function (res) {
  //     if (res.status === 200) {
  //       const itemData = JSON.parse(res.responseText);
  //       // priceSDB(itemData);
  //     }

  //     else return console.error('[itemdb] Failed to fetch price data', res);
  //   }
  // });
// }

//   async function priceSDB(itemData) {
//     const trs = $('form table').eq(2).find('tr').slice(1, -1);

//     $('#content > table > tbody > tr > td.content > form > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-last-child(2)')
//     .before('<td align="center" class="contentModuleHeaderAlt" style="text-align: center; width: 70px;" noWrap><img src="https://itemdb.com.br/logo_icon.svg" style="vertical-align: middle;" width="25px" height="auto"/> <b>Price</b></td>');

//     $('#content > table > tbody > tr > td.content > form > table:nth-child(3) > tbody > tr:last-child > td').before("<td></td>");

//     const intl = new Intl.NumberFormat();

//     trs.each(function (i) {
//       const tds = $(this).find('td');
//       const itemId = tds.last().find('input').attr('name').match(/\d+/)[0];

//       const item = itemData[itemId];
//       let priceStr = '';

//       /*
//        * If items are missing from the DB, wrap the conditions inside a try -> catch.
//        * With this approach, the execution of the script is not interrupted in case an "item.slug" is not parseable.
//        */
//       try {
//         if(!item || (item && item.status !== 'no trade' && !item.price.value && !item.isNC)){
//           priceStr = `<a href="https://itemdb.com.br/item/${item.slug}" target="_blank">???</a></small>`;
//         }

//         if(item && item.status === 'no trade'){
//           priceStr = `<a href="https://itemdb.com.br/item/${item.slug}" target="_blank">No Trade</a></small>`;
//         }

//         if(item && item.isNC && !item.owls){
//           priceStr = `<a href="https://itemdb.com.br/item/${item.slug}" target="_blank">NC</a>`;
//         }

//         if(item && item.isNC && item.owls){
//           priceStr = `<a href="https://itemdb.com.br/item/${item.slug}" target="_blank">${item.owls.value}</a><small><br/><a href="https://itemdb.com.br/articles/owls" target="_blank">Owls</a></small>`;
//         }

//         if(item && item.price.value){
//           priceStr = `<a href="https://itemdb.com.br/item/${item.slug}" target="_blank">≈ ${intl.format(item.price.value)} NP</a>`;
//         }

//         if (item && item.isMissingInfo){
//           priceStr += `<br/><small><a href="https://itemdb.com.br/contribute" target="_blank"><i>We need info about this item<br/>Learn how to Help</i></a></small>`
//         }
//       } catch { // We're not catching any specific error, as any error that may surface it will be handled with the "We need more info" referral link.
//         priceStr = `<a>Not Found</a></small>`;
//         priceStr += `<br/><small><a href="https://itemdb.com.br/contribute" target="_blank"><i>We need info about this item<br/>Learn how to Help</i></a></small>`
//       }

//       tds.eq( -2 ).before(`<td align="center" width="150px">${priceStr}</td>`);
//     })
//   }

petData();
