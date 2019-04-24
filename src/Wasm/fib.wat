(module
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$v (func))
 (memory $0 0)
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "fib" (func $src/Asm/fib/fib))
 (func $src/Asm/fib/fib (; 0 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 1
  i32.eq
  local.tee $1
  i32.eqz
  if
   local.get $0
   i32.const 2
   i32.eq
   local.set $1
  end
  local.get $1
  if
   local.get $0
   return
  end
  local.get $0
  i32.const 1
  i32.sub
  call $src/Asm/fib/fib
  local.get $0
  i32.const 2
  i32.sub
  call $src/Asm/fib/fib
  i32.add
 )
 (func $null (; 1 ;) (type $FUNCSIG$v)
  nop
 )
)
