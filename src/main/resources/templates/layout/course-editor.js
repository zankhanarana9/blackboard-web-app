$(function(){

    let $moduleRemove;
    let $moduleList;
    let $btnAddModule;
    let $templateModuleListItem;
    let $templateTopicListItem;
    let $btnAddTopic;
    let $topicList;

    $(main);
    function main() {
        console.log("Loaded...");
        $moduleList = $('.module-list');
        $topicList = $('.topic-list')
        $templateModuleListItem = $('.template-module-list-item');
        $templateTopicListItem=$('.topic-template');
        $btnAddModule = $("#add-module");
        $moduleRemove = $(".module-remove");     
        $btnAddTopic = $("#addTopic");

        $btnAddTopic.click(addTopic);
        $btnAddModule.click(addModule);        
        $moduleRemove.click(removeListItem);                   
    }

    function addTopic(event){
        if($('#newTopicName').val() != '' 
         || undefined === $('#newTopicName').val()
         || null === $('#newTopicName').val()) {
            $newTopicListItem = $templateTopicListItem.clone();
            $newTopicListItem.removeAttr('hidden')
                .find('a')
                .attr("id", (new Date()).getTime())
                .html($('#newTopicName').val());
            $topicList.append($newTopicListItem);
         }        
    }

    function addModule(event) {
        if($("#newModule").val() != '' 
            || undefined === $("#newModule").val()
            || null === $("#newModule").val()) {
            $newListItem = $templateModuleListItem.clone();  
            $removeSpan = $newListItem.find(".module-remove");                
            $newListItem.html($("#newModule").val())
                .removeClass(".template-module-list-item")
                .append($removeSpan)
                .find(".module-remove")
                .click(removeListItem);                          
            $list =  $("<li>").html($newListItem)  
            $list.attr("id",(new Date()).getTime());
            console.log($list);   
            $moduleList.append($list); 
        }   
        $('#newModule').val('');    
    }

    function removeListItem(event) {
        const removeSpan = $(event.currentTarget);    
        console.log(removeSpan)
        const listItem = removeSpan.parent().parent();
        listItem.remove();                
    }
});