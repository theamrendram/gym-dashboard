"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Member } from "@/types/member"
import { formatCurrency, formatDate } from "@/lib/utils"

interface ViewMemberDialogProps {
    member: Member
}

export function ViewMemberDialog({ member }: ViewMemberDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">View details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Member Details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-bold">Name:</span>
                        <span className="col-span-3">{member.name}</span>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-bold">Contact:</span>
                        <span className="col-span-3">{member.contactNo}</span>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-bold">Start Date:</span>
                        <span className="col-span-3">{formatDate(member.startDate)}</span>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-bold">End Date:</span>
                        <span className="col-span-3">{formatDate(member.endDate)}</span>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-bold">Fee:</span>
                        <span className="col-span-3">{formatCurrency(member.fee)}</span>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-bold">Plan:</span>
                        <span className="col-span-3">{member.membershipType}</span>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="font-bold">Status:</span>
                        <span className="col-span-3">{member.status}</span>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

