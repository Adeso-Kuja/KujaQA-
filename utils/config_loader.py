import configparser

class ConfigLoader:
    def __init__(self, file):
        self.cfg = configparser.ConfigParser()
        self.cfg.read(file)

    def get(self, section, key, default=None):
        try:
            return self.cfg.get(section, key)
        except:
            return default
