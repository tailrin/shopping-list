$('#js-shopping-list-form').on('submit', event => {
  event.preventDefault();
  const value = $('#shopping-list-entry').val()

  let x = `<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
  $('.shopping-list').append(x);
  $('#shopping-list-entry').val('');
  handleShoppingListClicks();
});


function handleDeleteClicks(){
  $('.shopping-item-delete').click(e => {
    e.preventDefault();
    $(e.currentTarget).closest('li').remove();
  });
} 

function handleCheckClicks(){
   $('.shopping-item').click(e => {
       e.preventDefault();
      $(e.currentTarget).closest('div').siblings().first().toggleClass('shopping-item__checked'); 
  });
}
function handleShoppingListClicks(){
  handleCheckClicks();
  handleDeleteClicks();
}
$(handleShoppingListClicks());
