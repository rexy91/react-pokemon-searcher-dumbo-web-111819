Draw the tree:
    Find out which one is the parent for rendering the card.
    Map the array inside that parent component,
        And pass down object to each card.
        Render object info inside card.


Fetch only 20:
    http://localhost:3000/pokemon?_limit=20


- Conditional rendering:
    Only one card will be flipped.
    If we have state tie to pokemon collection , will toggle every card's flip. 
    We only want to toggle one card. 


```js
    let obj = [
        {
            name: 'keyword',
            hp: 1000
        },
        {
            notname: 'keyword',
            hp: 1000
        },
        {
            lalala: 'keyword',
            hp: 1000
        },
    ]

    obj.find(singleObj => {
        singleObj.name === 'keyword'
    })
```