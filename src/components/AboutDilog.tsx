export default AboutDilog;
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { About } from "./About";

export function AboutDilog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full md:w-1/3">About me</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-full sm:max-h-[90vh]">
        <About />
      </DialogContent>
    </Dialog>
  );
}
