var search_data = {"index":{"searchIndex":["thinkinglobster","included()","increment_losses()","increment_wins()","mark_correct!()","mark_incorrect!()","new_item_correct()","new_item_incorrect()","old_item_correct()","old_item_incorrect()","previous_review?()","reset()","set_previous_review!()","time_since_due()","time_since_review()","too_soon?()"],"longSearchIndex":["thinkinglobster","thinkinglobster::included()","thinkinglobster#increment_losses()","thinkinglobster#increment_wins()","thinkinglobster#mark_correct!()","thinkinglobster#mark_incorrect!()","thinkinglobster#new_item_correct()","thinkinglobster#new_item_incorrect()","thinkinglobster#old_item_correct()","thinkinglobster#old_item_incorrect()","thinkinglobster#previous_review?()","thinkinglobster#reset()","thinkinglobster#set_previous_review!()","thinkinglobster#time_since_due()","thinkinglobster#time_since_review()","thinkinglobster#too_soon?()"],"info":[["ThinkingLobster","","classes/ThinkingLobster.html","",""],["included","ThinkingLobster","classes/ThinkingLobster.html#method-c-included","(collection)","<p>Includes a set of fields and support methods into the base class. Mongoid\nmust be included in the base …\n"],["increment_losses","ThinkingLobster","classes/ThinkingLobster.html#method-i-increment_losses","()",""],["increment_wins","ThinkingLobster","classes/ThinkingLobster.html#method-i-increment_wins","()",""],["mark_correct!","ThinkingLobster","classes/ThinkingLobster.html#method-i-mark_correct-21","(current_time = Time.now)","<p>Marks the item correct and increases the item&#39;s review intervals\naccordingly. Takes no action if …\n"],["mark_incorrect!","ThinkingLobster","classes/ThinkingLobster.html#method-i-mark_incorrect-21","(current_time = Time.now)","<p>Marks the item incorrect and shortens the review interval.\n<p>Example:\n\n<pre>flash_card = SomeDocument.new\nflash_card.mark_incorrect! ...</pre>\n"],["new_item_correct","ThinkingLobster","classes/ThinkingLobster.html#method-i-new_item_correct","(current_time = Time.now)",""],["new_item_incorrect","ThinkingLobster","classes/ThinkingLobster.html#method-i-new_item_incorrect","(current_time = Time.now)",""],["old_item_correct","ThinkingLobster","classes/ThinkingLobster.html#method-i-old_item_correct","(current_time = Time.now)",""],["old_item_incorrect","ThinkingLobster","classes/ThinkingLobster.html#method-i-old_item_incorrect","(current_time = Time.now)",""],["previous_review?","ThinkingLobster","classes/ThinkingLobster.html#method-i-previous_review-3F","()","<p>Indicates if the item has a previous review set (which would indicate\nwether it is a newly added item). …\n"],["reset","ThinkingLobster","classes/ThinkingLobster.html#method-i-reset","(current_time = Time.now)","<p>Resets all attributes related to spaced repetition. You still need to call\nsave on the item to persist. …\n"],["set_previous_review!","ThinkingLobster","classes/ThinkingLobster.html#method-i-set_previous_review-21","(current_time = Time.now)",""],["time_since_due","ThinkingLobster","classes/ThinkingLobster.html#method-i-time_since_due","(current_time = Time.now)","<p>Indicates quantity of time since the item became ready for a review. This\nmethod is under consideration …\n"],["time_since_review","ThinkingLobster","classes/ThinkingLobster.html#method-i-time_since_review","(current_time = Time.now)","<p>Indicates quantity of time since the item was last reviewed review. Be\naware that this method is not …\n"],["too_soon?","ThinkingLobster","classes/ThinkingLobster.html#method-i-too_soon-3F","(current_time = Time.now)","<p>Indicates if a review would be &#39;premature&#39; at the indicated time,\nmeaning that the application …\n"]]}}