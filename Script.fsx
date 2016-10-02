﻿#r "packages/FSharpx.Collections.1.15.2/lib/net40/FSharpx.Collections.dll"
#r "packages/FsControl.2.0.0-CI00093/lib/net40/FsControl.dll"

#load "src/Seed.fs"
#load "src/Tree.fs"
#load "src/Shrink.fs"
#load "src/Random.fs"
#load "src/Gen.fs"

open System
open Jack
open FSharpx.Collections

Gen.printSample <| gen {
    let! x = Gen.choose 0 10
    let! y = Gen.elements [ "x"; "y"; "z"; "w" ]
    return sprintf "%A + %s" x y
}

