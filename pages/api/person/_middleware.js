const { NextResponse } = require('next/server')
export async function middleware(req, res) {
  console.log('in person api mw')
  const response = NextResponse.next()
  debugger
  await new Promise((resolve) => {
    setTimeout(resolve, 10)
  })
  return response
}
