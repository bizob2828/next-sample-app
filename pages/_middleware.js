const { NextResponse } = require('next/server')
export async function middleware(req, res) {
  console.log('in root mw')
  const response = NextResponse.next()
  debugger
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  response.headers.set('x-bob', 'another-header')
  return response
}


