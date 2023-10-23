import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';


export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, password } = body;
  console.log(body);

  if (!name || !email || !password) {
    return new NextResponse('Missing name, email or password', { status: 400 });
  }

  const exist = await prisma.user.findUnique({ where: { email } });

  if (exist) {
    return new NextResponse('User already exists', { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  return NextResponse.json(user);
}
