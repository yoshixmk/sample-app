FactoryGirl.define do
  factory :user do
    name "yoshixmk"
    email "yoshixmk@example.com"
    password "foobar"
    password_confirmation "foobar"
  end

  factory :user do
    sequence(:name)  { |n| "Person #{n}" }
    sequence(:email) { |n| "person_#{n}@example.com"}
    password "foobar"
    password_confirmation "foobar"
  end
end