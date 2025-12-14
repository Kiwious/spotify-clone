/* eslint-disable react-hooks/incompatible-library */

import { FC, ReactNode } from "react";
import Modal from "./Modal";
import { Button } from "../ui/button";
import Radio from "../Form/Radio/Radio";
import { FormProvider, useForm } from "react-hook-form";
import { Heart, ListMusic } from "lucide-react";
import Input from "../Form/Input/Input";
import Textarea from "../Form/Input/Textarea";
import { Label } from "../ui/label";
import AlertBox from "../AlertBox/AlertBox";
import Switch from "../Form/Switch/Switch";

interface FormValues {
  playlist: "playlist" | "like";
  private: boolean;
}

interface Props {
  track: Track;
  trigger: ReactNode;
}

const LikeTrackModal: FC<Props> = ({ track, trigger }) => {
  const form = useForm<FormValues>({
    defaultValues: { playlist: "like", private: true },
  });
  const playlist = form.watch("playlist");
  const privatePlaylist = form.watch("private");

  return (
    <Modal
      title={`${track.track_metadata.title} zu einer Playlist hinzufügen`}
      trigger={trigger}
    >
      <FormProvider {...form}>
        <form>
          <div>
            <div className="md:grid grid-cols-2 gap-4">
              <Radio
                name="playlist"
                label="Liken"
                description="Der Song wird zu deinen Likes hinzugefügt"
                value="like"
                icon={<Heart />}
              />
              <Radio
                name="playlist"
                label="Neue Playlist erstellen"
                description="Der Song wird in eine neue Playlist hinzugefügt"
                value="playlist"
                icon={<ListMusic />}
              />
            </div>
            {playlist === "playlist" && (
              <div className="flex flex-col space-y-4 mt-4">
                {privatePlaylist && (
                  <AlertBox>
                    Hinweis: Diese Playlist wirst nur du sehen können
                  </AlertBox>
                )}
                <Input
                  required
                  autoFocus
                  name="name"
                  label="Name"
                  placeholder="Soft Vibes"
                />
                <Textarea
                  name="description"
                  label="Beschreibung"
                  placeholder="Entspannte Vibes für jeden Moment. 🎶"
                />
                <div className="flex flex-col">
                  <div className="flex space-x-2">
                    <Switch name="private" />
                    <Label htmlFor="private">Private Playlist</Label>
                  </div>
                </div>
              </div>
            )}
            <div className="flex space-x-2 w-full justify-end mt-4">
              <Button variant="default">Speichern</Button>
              <Button variant="secondary">Abbrechen</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default LikeTrackModal;
