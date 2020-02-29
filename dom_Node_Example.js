//example of virtual dom representation of the html

<div class="container">
    <img class="img-responsive />
</div>

const domNode={
    tag:'div,
    attributes: {className: 'container'},
    children: {
        tag: 'img',
        attributes: {className: 'img-responsive},
        children: []
    }
}