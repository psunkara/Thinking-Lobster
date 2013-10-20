Thinking Lobster (unreleased)
===

A Ruby gem to add [spaced repetion](http://en.wikipedia.org/wiki/Spaced_repetition) functionality to [Mongoid](http://mongoid.org/) documents.

This gem is used for non-scaled, correct / incorrect review systems only. In that sense, it is more similar to the [Leitner System](http://en.wikipedia.org/wiki/Leitner_system) than scaled response algorithms, such as [SM Family of algorithms](http://www.supermemo.com/english/ol/sm2.htm).

**Although functional, this gem has yet to be published and is still in the testing phase.**

Examples
---

```ruby
class FlashCard
  include Mongoid::Document
  include ThinkingLobster
  field :question
  field :answer
end

q = FlashCard.create(question: 'First American President', answer: 'George Washington')

q.review_time
# => 2013-10-19 22:06:28 -0700

# Marks the item correct and automatically lengthens the time until next review.
q.mark_correct!
# => #<FlashCard 0x123>

# Marking it wrong will intelligently shorten the time until next review.
q.mark_incorrect!
# => #<FlashCard 0x123>

# q.previous_review?
#returns instance of Time
# => 2013-10-19 22:06:28 -0700

# q.time_since_due
#Returns number of seconds since it was due
# => 2335243423

# The point of using an SRS is reviewing LESS, not more. This method lets you know if its not time to review yet...
#q.too_soon?
# => true

```

Installation
---

```
gem install thinking-lobster
```

or with bundler via

```gem 'thinking-lobster'```

Testing
---

```rake test```

License
---

Licensed under the MIT License. See license.txt for more information.

Contributors
---

 * Brett Byler
 * Rick Carlino

Please add your name to this list if submitting a pull request.