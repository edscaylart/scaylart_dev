"use client";
import { profile } from "@/data/profile";
import { Card, CardLabel } from "./ui/card";
import React from "react";
import clsx from "clsx";

const InfoBlock = ({ label, value }: { label: string; value: string }) => {
  return (
    <div
      className={clsx(
        "flex flex-1 items-start sm:items-center sm:gap-2",
        "flex-col sm:flex-row",
      )}
    >
      <span className="text-sm uppercase text-text-900">{label}</span>
      <span className="flex-1 border-b">{value}</span>
    </div>
  );
};

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row space-x-4">
        <Card>
          <CardLabel>Name</CardLabel>
          <span className="flex-1 text-xl">{profile.name}</span>
        </Card>
        <Card className="w-[60px] flex-none">
          <CardLabel>Level</CardLabel>
          <span className="flex-1 text-center text-xl">{profile.level}</span>
        </Card>
      </div>

      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-row items-center space-x-4">
          <InfoBlock label="Class" value={profile.class} />
          <InfoBlock label="Background" value={profile.background} />
        </div>
        <div className="flex flex-1 flex-row items-center space-x-4">
          <InfoBlock label="Race" value={profile.race} />
          <InfoBlock label="Alignment" value={profile.alignment} />
        </div>
      </div>
    </div>
  );
};
