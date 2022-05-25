var documenterSearchIndex = {"docs":
[{"location":"#Cyton-API","page":"Cyton API","title":"Cyton API","text":"","category":"section"},{"location":"","page":"Cyton API","title":"Cyton API","text":"These are the types and methods that implement the Cyton framework.","category":"page"},{"location":"","page":"Cyton API","title":"Cyton API","text":"See this guide for an overview: cyton-dynamics.github.io/","category":"page"},{"location":"","page":"Cyton API","title":"Cyton API","text":"CurrentModule = Cyton","category":"page"},{"location":"","page":"Cyton API","title":"Cyton API","text":"CellPopulation","category":"page"},{"location":"#Cyton.CellPopulation","page":"Cyton API","title":"Cyton.CellPopulation","text":"CellPopulation\n\nThe population of cells with convenince constructors. Ordinarily, this will be constructed by the framework.\n\n\n\n\n\n","category":"type"},{"location":"","page":"Cyton API","title":"Cyton API","text":"step(::FateTimer, ::Time, ::Duration)","category":"page"},{"location":"#Cyton.step-Tuple{FateTimer, Float64, Float64}","page":"Cyton API","title":"Cyton.step","text":"step(::FateTimer, ::Time, ::Duration)::Union{CellEvent, Nothing}\n\nStep the FateTimer forward by one time increment. This should be implemented for each  concrete FateTimer\n\nOptionally return a CellEvent\n\n\n\n\n\n","category":"method"},{"location":"","page":"Cyton API","title":"Cyton API","text":"inherit","category":"page"},{"location":"#Cyton.inherit","page":"Cyton API","title":"Cyton.inherit","text":"inherit(::FateTimer, ::Time)::FateTimer\n\nCalled when a cell divides, this allows daughters to inherit timers, create new timers or something in between.\n\nNote: It may be tempting to simple return the parent timer if the cell inherits the timers but be aware the stepper will called for that timer for each cell that references it.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Cyton API","title":"Cyton API","text":"modelTime(model::CellPopulation)","category":"page"},{"location":"#Cyton.modelTime-Tuple{CellPopulation}","page":"Cyton API","title":"Cyton.modelTime","text":"modelTime(model::CellPopulation)::Time\n\nReturns the current model time\n\n\n\n\n\n","category":"method"},{"location":"","page":"Cyton API","title":"Cyton API","text":"modelTimeStep(model::CellPopulation)","category":"page"},{"location":"#Cyton.modelTimeStep-Tuple{CellPopulation}","page":"Cyton API","title":"Cyton.modelTimeStep","text":"modelTimeStep(model::CellPopulation)::Duration\n\nReturns the current model time step.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Cyton API","title":"Cyton API","text":"cellCount(model::CellPopulation)","category":"page"},{"location":"#Cyton.cellCount-Tuple{CellPopulation}","page":"Cyton API","title":"Cyton.cellCount","text":"cellCount(model::CellPopulation)::Int\n\nReturn the number of cells in the population\n\n\n\n\n\n","category":"method"},{"location":"","page":"Cyton API","title":"Cyton API","text":"createPopulation(nCells::Int, \n  cellFactory::Function; \n  eventCallbacks::Vector{Function}=Function[])","category":"page"},{"location":"#Cyton.createPopulation-Tuple{Int64, Function}","page":"Cyton API","title":"Cyton.createPopulation","text":"createPopulation(nCells::Int,    cellFactory::Function;    eventCallbacks::Vector{Function}=Function[])::CellPopulation\n\nCreate a population of cells:  nCells: size of starting populations  cellFactory: A function that returns constructs a new cell  eventCallbacks: Function that are called when events occurs\n\nDivision and Death are two predefined events\n\n\n\n\n\n","category":"method"},{"location":"","page":"Cyton API","title":"Cyton API","text":"step(model::CellPopulation, stimulus::T) where T<:Stimulus","category":"page"},{"location":"#Cyton.step-Union{Tuple{T}, Tuple{CellPopulation, T}} where T<:Stimulus","page":"Cyton API","title":"Cyton.step","text":"step(model::CellPopulation, stimulus::T) where T<:Stimulus\n\nStep the population forward in time by one time step, with a single stimulus.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Cyton API","title":"Cyton API","text":"step(model::CellPopulation, stimuli::Vector{T}=Vector{Stimulus}()) where T<:Stimulus","category":"page"},{"location":"#Cyton.step-Union{Tuple{CellPopulation}, Tuple{T}, Tuple{CellPopulation, Vector{T}}} where T<:Stimulus","page":"Cyton API","title":"Cyton.step","text":"step(model::CellPopulation, stimuli::Vector{T}=Vector{Stimulus}()) where T<:Stimulus\n\nStep the population forward in time by one time step, with optional stimuli\n\n\n\n\n\n","category":"method"},{"location":"","page":"Cyton API","title":"Cyton API","text":"step(agent::CellAgent, model::CellPopulation, stimuli::Vector{T}) where T<:Stimulus","category":"page"},{"location":"#Cyton.step-Union{Tuple{T}, Tuple{Cyton.CellAgent, CellPopulation, Vector{T}}} where T<:Stimulus","page":"Cyton API","title":"Cyton.step","text":"step(agent::CellAgent, model::CellPopulation, stimuli::Vector{T}) where T<:Stimulus\n\nStep a cell forward in time by one time step.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Cyton API","title":"Cyton API","text":"","category":"page"}]
}