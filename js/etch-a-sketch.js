


function Etch_A_Sketch_Pixel()
{
    this.bIsSet = false;
}

function Etch_A_Sketch_Row()
{

}

function Etch_A_Sketch(Grid)
{
    this.rows
}

const EtchySketchElement = document.querySelector("#etch-a-sketch");

function UpdatePageContent(rows, columns)
{
    EtchySketchElement.replaceChildren();

    for(let row_iterator = 0; row_iterator < rows; row_iterator++)
    {
        let new_row = document.createElement('div');
        new_row.classList.add('etch-a-sketch-row');

        for(let column_iterator = 0; column_iterator < columns; column_iterator++)
        {
            let new_pixel = document.createElement('div');
            new_pixel.classList.add('etch-a-sketch-pixel');

            new_pixel.addEventListener('mouseover', HandlePixelMouseOver);
            //new_pixel.addEventListener('mouseout', HandlePixelMouseOut);

            new_row.appendChild(new_pixel);
        }

        EtchySketchElement.appendChild(new_row);
    }
}


UpdatePageContent(100, 100);


function HandlePixelMouseOver(event)
{
    event.target.setAttribute('style', 'background-color: gray');
}


function HandlePixelMouseOut(event)
{
    event.target.setAttribute('style', 'background-color: white');
}