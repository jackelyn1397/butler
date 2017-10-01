Template.RequestService.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('keywords');
	});
});

Template.RequestService.events({
  'click .send' : function () {
      var message = document.getElementById('text').value;
      var params = {
          // Request parameters
      };
    
      $.ajax({
          url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases?" + $.param(params),
          beforeSend: function(xhrObj){
              // Request headers
              xhrObj.setRequestHeader("Content-Type","application/json");
              xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","09aed0988aac4d2586f3bcd9d7322991");
          },
          type: "POST",
          // Request body
          data: JSON.stringify({ 'documents': [{ 'id': '1', 'language': 'en', 'text': message }]})
      })
      .done(function(data) {
          console.log(data);
          var keywords = data.documents[0].keyPhrases
          document.getElementById("keywords").innerHTML = "Keywords found: "+keywords;
          for(var i = 0; i<keywords.length; i++){
            var existing = Keywords.findOne({keyword: keywords[i]});
            if (!existing) {
                Meteor.call("newKeyword", keywords[i], 1);
            }
            else{
              Meteor.call("increaseKeywordFrequency", keywords[i]);
            }
          }
          console.log(Keywords.find({}).fetch());
  
      })
      .fail(function() {
          alert("error");
      });
  }
});

Template.RequestService.helpers({

});