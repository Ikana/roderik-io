$.ajax('https://api.github.com/search/repositories?q=user:ikana&per_page=10',
{
  success: function(res){

    res.items.reduce(function(sel,item){
      var repo = '<tr> <td> <a href="';

      repo += item.html_url;
      repo += '">'
      repo += '<img class="svg-logo" src="/resources/github.svg" alt="github logo">'
      repo += '</a> </td> <td>'
      repo += item.name;
      repo += "</td></tr>"

      sel.append($(repo));
      return sel;
    },$('#insert-repo-selector'));
  }
});
