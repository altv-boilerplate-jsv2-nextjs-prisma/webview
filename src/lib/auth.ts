"use server";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import prisma from "./prisma";

export async function getSession(req: NextRequest) {
    const check = await checkSession(req);
    if (check) {
        return await getSessionUser();
    }
}

export async function checkSession(req: NextRequest) {
    const cookieToken = cookies().get('viewToken')?.value;
    if (typeof cookieToken === 'undefined') return false;

    const token = req.cookies.get('viewToken')?.value;
    if (typeof token === 'undefined') return false;

    return cookieToken === token;
}

export async function getSessionUser() {
    const token = cookies().get('viewToken')?.value;
    if (typeof token === 'undefined') return null;

    return prisma.account.findFirst({ where: { apiToken: token } });
}