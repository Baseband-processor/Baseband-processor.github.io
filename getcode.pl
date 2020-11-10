#!/usr/bin/perl   

# htmltemplate.pl   

use warnings;   

use strict;   

use HTML::Template;   

print "aQ";
my $template = HTML::Template->new(filename => 'greeting1.tmpl');   

$template->param('email', 'bill@nowhere.com');   

$template->param('person', 'William');   

print "Content-Type: text/htmlnn";   

print $template->output; 
