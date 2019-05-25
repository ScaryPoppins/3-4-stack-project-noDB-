const eventItems = [
    {
        date: 'February 30th',
        image: 'https://cdn.vox-cdn.com/thumbor/TxoxPga0au_uDpeij0xHPuWlZVo=/0x0:630x358/920x0/filters:focal(0x0:630x358):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12417771/CeASWubVR9OcnVpTreHQ_seems-legit-18.0.jpg',
        name: 'Help the Children event',
        sponser: 'S. Ervay Childcare',
        location: 'Ervay Childcare Facility',
        streetAddress: '777 S. Ervay st',
        cityStateZip: 'Dallas Tx, 75053'
    },
    {
        date: 'June 31st',
        image: 'https://i.kinja-img.com/gawker-media/image/upload/s--4QRkoHmY--/c_fit,f_auto,fl_progressive,q_80,w_636/18r6nn5iv3gb8jpg.jpg',
        name: 'Save the Puppies',
        sponser: 'PETE-A',
        location: 'PETE-A headquarters',
        streetAddress: '8923 Front st',
        cityStateZip: 'Norfolk, VA 23519'
    },
    {
        date: 'Most days',
        image: 'https://i.kinja-img.com/gawker-media/image/upload/s--XSQwUFgp--/c_fit,f_auto,fl_progressive,q_80,w_636/18r6nn9h6ofvkjpg.jpg',
        name: '---resusable component---resusable component---',
        sponser: 'Lindsay Lohan',
        location: 'Beverly Hills Jailhouse',
        streetAddress: '486 Rexford Ct',
        cityStateZip: 'Beverly Hills, CA 90210'
    }
];

const events = (req, res) => {
    res.json(eventItems);
  };

  module.exports = {
    events
};