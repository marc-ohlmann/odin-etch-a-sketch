

const EtchySketchElement = document.querySelector("#etch-a-sketch");
const ResizeGridButton = document.querySelector("#btnResize");

ResizeGridButton.addEventListener('click', HandleInput_ResizeGrid);


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

            new_row.appendChild(new_pixel);
        }

        EtchySketchElement.appendChild(new_row);
    }
}


function HandlePixelMouseOver(event)
{
    event.target.setAttribute('style', 'background-color: gray');
}


function HandleInput_ResizeGrid()
{
    let gridSize = 0;
    while(gridSize <= 0 || gridSize > 100 || isNaN(gridSize))
    {
        input = prompt("enter a number (0-100) to resize the grid");
        if(input === null)
        {
            // exit early if the user pressed 'cancel'
            return;
        }

        gridSize = Number(input);
    }
    
    UpdatePageContent(gridSize, gridSize);
}


UpdatePageContent(100, 100);