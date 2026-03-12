"use client";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FileDropzoneProps {
  accept: string;
  multiple?: boolean;
  label?: string;
  sublabel?: string;
  buttonText?: string;
  onFiles: (files: FileList) => void;
  children?: React.ReactNode;
}

export function FileDropzone({ accept, multiple = false, label = "Drag & drop files here", sublabel, buttonText = "Select File", onFiles, children }: FileDropzoneProps) {
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) onFiles(e.dataTransfer.files);
  }, [onFiles]);

  return (
    <Card><CardContent className="p-8">
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${dragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50"}`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        {children ?? (
          <>
            <p className="text-lg font-medium">{label}</p>
            {sublabel && <p className="text-sm text-muted-foreground mt-1">{sublabel}</p>}
            <label className="cursor-pointer">
              <Button variant="secondary" className="mt-4" type="button">{buttonText}</Button>
              <input type="file" accept={accept} multiple={multiple} className="hidden" onChange={(e) => { if (e.target.files && e.target.files.length > 0) onFiles(e.target.files); }} />
            </label>
          </>
        )}
      </div>
    </CardContent></Card>
  );
}
