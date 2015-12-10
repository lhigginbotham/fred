//Description:
//  Ask fred to preview a wikipedia page
//Commands:
// fred wiki [name]

module.exports = function(robot){
  robot.respond (/wiki/i, function(msg){
    msg.reply("Test");
  });
}
