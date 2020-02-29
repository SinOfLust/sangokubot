const reactToMessages = (message) => {
    if (message.content.toLowerCase().match("java ")||message.content.toLowerCase().match("oracle")) {
      message.react(':java:683336567645011983');
    }
    if (message.content.toLowerCase().match("csharp")) {
      message.react(':csharp:683336566461956129');
    }
    if (message.content.toLowerCase().match("cpp")) {
      message.react(':cpp:683336573777084494');
    }
    if (message.content.toLowerCase().match("js")) {
      message.react(':js:683335975249641492');
    }
    if (message.content.toLowerCase().match("php")) {
      message.react(':php:683335986381586438');
    }
    if (message.content.toLowerCase().match("pokemon")||message.content.toLowerCase().match("pokeball")) {
      message.react(':pokeball:683334876153643072');
    }
    if (message.content.toLowerCase().match("steam")) {
      message.react(':steam:683334880041500731');
    }
    if (message.content.toLowerCase().match("gg")) {
      message.react(':gg:683334878003068983');
    }
    if (message.content.toLowerCase().match("overwatch")) {
      message.react(':overwatch:683334874417070092');
    }
    if (message.content.toLowerCase().match("fuck")) {
      message.react(':fuck:683334875784282184');
    }
    if (message.content.toLowerCase().match("trump")) {
      message.react(':trump:683333136339566705');
    }
    if (message.content.toLowerCase().match("octogone") || message.content.toLowerCase().match("booba")) {
      message.react(':booba:683332284933603332');
    }
    if (message.content.toLowerCase().match("react")) {
      message.react(':react:682286650008797226');
    }
    if (message.content.toLowerCase().match("angular")) {
      message.react(':angular:682287352663900190');
    }
  }
module.exports = reactToMessages