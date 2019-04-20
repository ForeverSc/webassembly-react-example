(module
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$v (func))
 (import "callJs" "alert" (func $src/Asm/callJs/alert (param i32)))
 (memory $0 0)
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $~lib/memory/HEAP_BASE i32 (i32.const 8))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "showAlert" (func $src/Asm/callJs/showAlert))
 (func $src/Asm/callJs/showAlert (; 1 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  call $src/Asm/callJs/alert
 )
 (func $null (; 2 ;) (type $FUNCSIG$v)
 )
)
